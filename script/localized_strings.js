let localizedStrings = (function() {
    // debug
    const debug = true;

    return ({
        generateLocalizationFunction: function(lang_id) {
            return (new Promise((resolve, reject) => {
                lang_id = String(lang_id).slice(0, 2);
                let passthrough = (string => string);
                if (lang_id === 'en') {
                    resolve(passthrough);
                    return;
                }
                fetch(`./locale/${lang_id}.json`)
                    .then(response => response.json())
                    .then(data => {
                        resolve(string => {
                            if (Object.keys(data).indexOf(string) > -1) {
                                return data[string];
                            } else {
                                if (debug) {
                                    console.log(`Translation not found: ${string}`);
                                }
                                return string;
                            }
                        });
                    })
                    .catch(() => {
                        if (debug) {
                            console.log(`Language not found: ${lang_id}`);
                        }
                        resolve(passthrough);
                    });
            }));
        }
    });
})();
