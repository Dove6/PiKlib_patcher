(async function() {
    // debug
    let debug = true;

    /*
     * GLOBALS
     */
    let _ = null;  // for strings localization

    /*
     * FUNCTIONS
     */
    function generatePatchesInfo(database) {
        database['games'].forEach(game => {
            let game_title = document.createElement('h2');
            game_title.id = `game${game['id']}`;
            game_title.className = 'game_title';
            game_title.innerHTML = game['name'];
            game_title.addEventListener('click', (event) => {
                if (event.target.classList.contains('open')) {
                    event.target.classList.remove('open');
                } else {
                    event.target.classList.add('open');
                }
            });
            let library_container = document.createElement('div');
            library_container.id = `game${game['id']}_libraries`;
            library_container.className = 'library_container';
            let game_libraries = database['libraries']
                .filter(library => library['game_id'] == game['id']);
            if (Object.keys(game_libraries).length == 0) {
                let missing_notice = document.createElement('p');
                missing_notice.className = 'missing_notice';
                missing_notice.innerHTML = _('none');
                library_container.appendChild(missing_notice);
                document.getElementById('game_container').appendChild(game_title);
                document.getElementById('game_container').appendChild(library_container);
                return;
            }
            game_libraries.forEach(library => {
                let library_title = document.createElement('h3');
                library_title.id = `library${library['id']}`;
                library_title.className = 'library_title';
                library_title.innerHTML = library['name'];
                let patch_container = document.createElement('div');
                patch_container.id = `library${library['id']}_patches`;
                patch_container.className = 'patch_container';
                let library_patches = database['patches']
                    .filter(patch => patch['library_id'] == library['id']);
                if (Object.keys(library_patches).length == 0) {
                    let missing_notice = document.createElement('p');
                    missing_notice.className = 'missing_notice';
                    missing_notice.innerHTML = _('none');
                    patch_container.appendChild(missing_notice);
                    library_container.appendChild(library_title);
                    library_container.appendChild(patch_container);
                    return;
                }
                library_patches.forEach(patch => {
                    let patch_title = document.createElement('a');
                    patch_title.id = `patch${patch['id']}`;
                    patch_title.className = 'patch_title';
                    patch_title.innerHTML = `<h4>${patch['name']}</h4>`;
                    patch_title.href = URL.createObjectURL(new Blob(
                        [new Uint8Array(patch['data'].split('').map(c => c.charCodeAt(0)))],
                        {type: 'text/plain'}
                    ));
                    let library_name_no_ext = library['name'];
                    if (library_name_no_ext.indexOf('.') != -1) {
                        library_name_no_ext = library_name_no_ext.slice(0, library_name_no_ext.lastIndexOf('.'));
                    }
                    patch_title.setAttribute(
                        'download',
                        `${game['acronym']}_${library_name_no_ext}_${patch['name']}.patch`
                    );
                    let patch_description = document.createElement('p');
                    patch_description.id = `patch${patch['id']}_description`;
                    patch_description.className = 'patch_description';
                    patch_description.innerHTML = patch['description'];
                    patch_container.appendChild(patch_title);
                    patch_container.appendChild(patch_description);
                });
                library_container.appendChild(library_title);
                library_container.appendChild(patch_container);
            });
            document.getElementById('game_container').appendChild(game_title);
            document.getElementById('game_container').appendChild(library_container);
        });
    }


    /*
    * MAIN BODY
    */
    _ = await localizedStrings.generateLocalizationFunction(
        navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)
    );
    sheetParser.loadSheets()
        .then(database => {
            if (debug) {
                console.log('Sheet parsing promise status: resolved!');
            }
            generatePatchesInfo(database);
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
                console.log('Page loaded!');
            }
        });

    Array.from(document.getElementsByClassName('localized')).forEach(element => {
        element.innerHTML = _(element.innerHTML);
    });
    document.querySelector('footer > a').href = _('README.md');
})();
