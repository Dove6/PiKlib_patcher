(async function() {
    // debug
    let debug = true;

    /*
    * GLOBALS
    */
    let input_data = null;
    let detected_ids = {'game': null, 'library': null};
    let applicable_patches = null;
    let output_data = null;
    let database = null;
    let _ = null;  // for strings localization

    /*
    * FUNCTIONS
    */
    function processInputFile(event) {
        let input_file = null;
        if (event.type === 'change') {
            if (event.target.files.length > 0) {
                input_file = event.target.files[0];
            } else {
                if (debug) {
                    console.log('No input files selected!');
                }
            }
        } else if (event.type === 'drop') {
            // based on: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
            event.preventDefault();  // prevent opening the file
            document.getElementById('file_screen').classList.remove('drag');
            if (event.dataTransfer.items) {
                // use DataTransferItemList interface to access the file
                if (event.dataTransfer.items.length > 0) {
                    if (event.dataTransfer.items[0].kind === 'file') {
                        input_file = event.dataTransfer.items[0].getAsFile();
                    } else {
                        if (debug) {
                            console.log('Dropped a non-file item');
                        }
                        event.dataTransfer.items[0].getAsString(content => {
                            if (content === document.getElementById('file_icon').src) {
                                document.getElementById('file_icon').style.opacity = 1;
                            }
                        });
                    }
                }
            } else {
                // use DataTransfer interface to access the file
                if (event.dataTransfer.files.length > 0) {
                    input_file = event.dataTransfer.files[0];
                }
            }
        }
        if (input_file === null) {
            return;
        }
        document.getElementById('file_output').setAttribute('download', input_file.name);
        Array.from(document.getElementsByClassName('file_name')).forEach(name => {
            name.innerHTML = input_file.name;
        });
        input_data = null;
        output_data = null;
        detected_ids['game'] = null;
        detected_ids['library'] = null;
        input_file.arrayBuffer()
            .then(data => {
                input_data = data;
                if (debug) {
                    console.log('Loaded input data:\n', input_data);
                }
            })
            .then(calculateChecksum)
            .then(preparePatchChoice)
            .catch(error => {
                console.log('An error has occured:\n', error);
            });
    }

    function calculateChecksum() {
        if (input_data === null) {
            return Promise.reject(new Error('No input binary data present!'));
        }
        return new Promise((resolve, reject) => (crypto.subtle.digest('SHA-1', input_data)
            .then(result => {
                let checksum = (new Uint8Array(result))
                    .reduce((hex_string, byte) => (hex_string + ('0' + byte.toString(16)).slice(-2)), '')
                    .toLowerCase();
                if (debug) {
                    console.log('Calculated checksum:', checksum);
                }
                let recognized_library = database['libraries']
                    .filter(library => (library['checksum'].toLowerCase() === checksum));
                if (recognized_library.length > 0) {
                    detected_ids['library'] = recognized_library[0]['id'];
                    detected_ids['game'] = recognized_library[0]['game_id'];
                } else {
                    detected_ids['library'] = null;
                    detected_ids['game'] = null;
                    document.getElementById('detection_error_container').style.display = 'block';
                    document.getElementById('error_screen').style.display = 'flex';
                    document.getElementById('file_screen').style.display = 'none';
                    document.querySelector('#error_screen .reset_button').focus();
                }
                resolve();
            }, reject)
        ));
    }

    function preparePatchChoice() {
        document.getElementById('patch_checkbox_container').innerHTML = '';
        if (detected_ids['library'] === null) {
            applicable_patches = null;
            throw new Error('No library ID detected!');
        }
        document.getElementById('game_name').innerHTML = database['games']
            .find(game => game['id'] == detected_ids['game'])['name'];
        let library_version = database['libraries'].find(lib => lib['id'] == detected_ids['library'])['comment'];
        if (typeof(library_version) !== 'undefined') {
            document.getElementById('library_version').innerHTML = `(${library_version})`;
        } else {
            document.getElementById('library_version').innerHTML = '';
        }
        applicable_patches = database['patches']
            .filter(patch => ((patch['library_id'] == detected_ids['library']) && (patch['is_valid'].toLowerCase() == 'true')));
        if (debug) {
            console.log('Available patches:\n', applicable_patches);
        }
        applicable_patches.forEach(patch => {
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'patch' + patch['id'];
            checkbox.name = checkbox.id;
            checkbox.className = 'patch_checkbox';
            let poisoned_ids = new Array();
            database['incompatibility']
                .filter(entry => (entry['patch_id1'] == patch['id'] || entry['patch_id2'] == patch['id']))
                .forEach(entry => {
                    if (entry['patch_id1'] == patch['id']) {
                        poisoned_ids.push(entry['patch_id2']);
                    } else {
                        poisoned_ids.push(entry['patch_id1']);
                    }
                });
            poisoned_ids = poisoned_ids.map(id => `patch${id}`);
            checkbox.addEventListener('change', event => {
                if (event.target.checked) {
                    poisoned_ids.forEach(poisoned_id => {
                        let poisoned_check = document.getElementById(poisoned_id);
                        if (poisoned_check) {
                            poisoned_check.checked = false;
                        }
                    });
                }
            });
            let label = document.createElement('label');
            label.setAttribute('for', checkbox.id);
            label.innerHTML = `<span class="checkbox_title">${patch['name']}</span><br>${patch['description']}`;
            document.getElementById('patch_checkbox_container').appendChild(checkbox);
            document.getElementById('patch_checkbox_container').appendChild(label);
            document.getElementById('patch_checkbox_container').appendChild(document.createElement('br'));
        });
        document.getElementById('patch_screen').style.display = 'flex';
        document.getElementById('file_screen').style.display = 'none';
    }

    function patchLibrary() {
        if (input_data === null) {
            if (debug) {
                console.log('No input binary data present!');
            }
            return;
        }
        output_data = input_data.slice();
        let output_editable = new Uint8Array(output_data);
        let patches_to_apply = new Array();
        let checked_boxes = Array.from(document.getElementsByClassName('patch_checkbox')).filter(e => e.checked);
        checked_boxes.forEach(checkbox => {
            let id = checkbox.id.match(/patch(.+)$/)[1];
            patches_to_apply.push(database['patches'].find(patch => patch['id'] == id));
        });
        patches_to_apply.forEach(patch => {
            if (debug) {
                console.log(`Applying ${patch['name']} patch (id ${patch['id']})...`);
            }
            patch['data'].split('\n')
                .filter(e => e.length > 0)
                .map(e => e.match(/([0-9a-fA-F]{8}): ([0-9a-fA-F]{2})/))
                .map(e => ({'index': parseInt(e[1], 16), 'value': parseInt(e[2], 16)}))
                .forEach(e => {
                    output_editable[e['index']] = e['value'];
                });
        });
        crypto.subtle.digest('SHA-1', output_data).then(result => {
            let checksum = (new Uint8Array(result))
                .reduce((hex_string, byte) => (hex_string + ('0' + byte.toString(16)).slice(-2)), '')
                .toLowerCase();
            if (debug) {
                console.log(`Patched, resulting checksum: ${checksum}`);
            }
        });
        document.getElementById('file_output').href = URL.createObjectURL(
            new Blob([output_data], {type: 'application/x-msdownload'})
        );
        document.getElementById('file_output').click();
    }


    /*
    * MAIN BODY
    */
    let language = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);
    _ = await localizedStrings.generateLocalizationFunction(language);
    sheetParser.loadSheets(language)
        .then(loaded_db => {
            database = loaded_db;
            document.getElementById('file_input').addEventListener('change', processInputFile);
            document.getElementById('file_screen').addEventListener('drop', processInputFile);
            document.getElementById('file_screen').addEventListener('dragover', event => {
                event.preventDefault();
                if (!document.getElementById('file_screen').classList.contains('drag')) {
                    document.getElementById('file_screen').classList.add('drag');
                }
            });
            document.getElementById('file_screen').addEventListener('dragenter', event => event.preventDefault());
            document.getElementById('file_screen').addEventListener('dragleave', event => {
                event.preventDefault();
                document.getElementById('file_screen').classList.remove('drag');
            });
            document.getElementById('file_icon').addEventListener('dragstart', event => {
                if (event.target.style.opacity === '' || Number(event.target.style.opacity) !== 0) {
                    event.target.style.opacity = 0;
                } else {
                    event.preventDefault();
                    return false;
                }
            });
            document.getElementById('patch_button').addEventListener('click', patchLibrary);
            if (debug) {
                console.log({database});
                console.log('Sheet parsing promise status: resolved!');
            }
        }, error => {
            let error_screen = document.getElementById('error_screen');
            let db_error_section = document.getElementById('database_error_container');
            let error_message = document.getElementById('database_error');
            db_error_section.style.display = 'block';
            error_message.innerHTML = String(error.message) + ((error.name !== 'Error') ? ` (${error.name})` : '');
            error_screen.style.display = 'flex';
            document.getElementById('file_screen').style.display = 'none';
            if (debug) {
                console.log('Sheet parsing promise status: rejected!');
            }
        })
        .finally(() => {
            document.getElementById('loading_screen').style.display = 'none';
            if (debug) {
                console.log('Sheet parsing promise settled!');
            }
        });

    Array.from(document.getElementsByClassName('localized')).forEach(element => {
        element.innerHTML = _(element.innerHTML);
    });
    let mail_address = 'rockdove@int.pl';
    let mail_subject = `[PiKlib patcher] ${_('Missing library')}`;
    let mail_body = `${_('Fill in this form and don\'t forget to attach the library')}!\n
        ${_('Game name')}: 
        ${_('Game edition distinctive features (optional)')}: 
        ${_('Desired patches (optional)')}: `;
    document.getElementById('mail_notify').href =
        `mailto:${mail_address}?subject=${encodeURIComponent(mail_subject)}&body=${encodeURIComponent(mail_body)}`;
    document.querySelector('footer > a').href = `https://github.com/Dove6/PiKlib_patcher/blob/master/${_('README.md')}`;

    document.querySelector('label[for="file_input"]').addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.target.click();
        }
    });
    document.querySelector('label[for="file_input"]').addEventListener('keyup', event => {
        if (event.key === ' ' || event.key === 'Spacebar') {
            event.target.click();
        }
    });
    Array.from(document.getElementsByClassName('reset_button')).forEach(button => {
        button.addEventListener('click', () => {
            Array.from(document.getElementsByClassName('screen')).forEach(screen => {
                screen.style.display = 'none';
            });
            document.getElementById('file_screen').style.display = 'flex';
            document.getElementById('file_input').value = null;
            document.querySelector('label[for="file_input"]').focus();
        });
    });
})();
