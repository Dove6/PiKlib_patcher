var sheetParser = (function() {
    // debug
    const debug = true;
    const sheet_id = '1YYwB6YWPf3PysdrBDF2qNrdhiWlRKpBzvB7HyRAn048';

    /*
    * DATABASE LAYOUT
    */
    // mapping of grid names to grid IDs
    const tables = {
        'games': '1',
        'libraries': '2',
        'patches': '3',
        'incompatibility': '4'
    };

    function createRow(grid_name) {
        switch (grid_name) {
            case 'games':
                return {
                    'id': '1',
                    'name': '2',
                    'acronym': '3',
                    'comment': '4'
                };
            case 'libraries':
                return {
                    'id': '1',
                    'name': '2',
                    'checksum': '3',
                    'comment': '4',
                    'game_id': '5'
                };
            case 'patches':
                return {
                    'id': '1',
                    'name': '2',
                    'description': '3',
                    'modified_checksum': '4',
                    'is_valid': '5',
                    'data': '6',
                    'comment': '7',
                    'library_id': '8'
                };
            case 'incompatibility':
                return {
                    'id': '1',
                    'patch_id1': '2',
                    'patch_id2': '3',
                    'comment': '4'
                };
            default: {
                if (debug) {
                    console.log(`Incorrect grid name: "${grid_name}"`);
                }
            }
        }
    }

    // mapping of column names to colulmn IDs in grids
    const columns = {
        'games': createRow('games'),
        'libraries': createRow('libraries'),
        'patches': createRow('patches'),
        'incompatibility': createRow('incompatibility')
    };

    // checking for duplicates in tables and columns values
    if ((new Set(Object.values(tables))).size !== Object.values(tables).length) {
        throw new Error('Duplicate values in "tables" object!');
    }
    for (let column_name in columns) {
        if ((new Set(Object.values(columns[column_name]))).size !== Object.values(columns[column_name]).length) {
            throw new Error(`Duplicate values in "columns[${column_name}]" object!`);
        }
    }


    /*
    * FUNCTIONS
    */
    function loadGrid(grid_name) {
        let grid_id = Number(tables[grid_name]);
        return new Promise((resolve, reject) => {
            fetch(`https://spreadsheets.google.com/feeds/cells/${sheet_id}/${grid_id}/public/full?alt=json`)
                .then(response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    // nested map of rows
                    //  structure: Map(row_id => Map(column_id => cell_contents))
                    let rows_map = new Map();
                    data['feed']['entry'].forEach(function(entry) {
                        // process everything but column headers (skip the first row)
                        if (entry['gs$cell']['row'] != 1) {
                            if (!rows_map.has(entry['gs$cell']['row'])) {
                                rows_map.set(entry['gs$cell']['row'], new Map());
                            }
                            rows_map.get(entry['gs$cell']['row']).set(entry['gs$cell']['col'], entry['gs$cell']['$t']);
                        }
                    });
                    if (debug) {
                        console.log({grid_name, rows_map});
                    }
                    // converting rows nested map to an array of objects
                    rows_array = Array();
                    rows_map.forEach(function(row_map) {
                        let row_object = createRow(grid_name);
                        for (let column_name in row_object) {
                            row_object[column_name] = row_map.get(row_object[column_name]);
                        }
                        rows_array.push(row_object);
                    });
                    if (debug) {
                        console.log(`Parsed "${grid_name}" grid!`);
                    }
                    resolve(rows_array);
                })
                .catch(reject);
        });
    }

    return {
        loadSheets: function() {
            let promises_array = new Array();

            for (let grid_name in tables) {
                promises_array[Number(tables[grid_name])] = loadGrid(grid_name);
            }
            if (debug) {
                console.log({promises_array});
            }
            return (Promise.all(promises_array)
                .then(result => {
                    let database = Object.assign(tables);
                    for (let grid_name in tables) {
                        database[grid_name] = result[Number(tables[grid_name])];
                    }
                    return database;
                })
            );
        }
    };
})();
