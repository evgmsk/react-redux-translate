'use strict';

function translator (defaultLanguage, storeLanguageKey, path) {
    if (arguments.length < 3)
        throw new Error("Function 'translator' require at least three arguments default language, language key in the store, path from the root of the project (directory contained node-modules) to 'i18n' directory");
    
    function Lang(defaultLanguage, path) {
        this.path = path;
        this.lang = defaultLanguage;
        this.defineSource(defaultLanguage);
    }

    Lang.prototype.defineSource = function(lang) {
        this.langSource = require(`../../${this.path}${lang}.json`);
        this.lang = lang;
    };

    const i18n = new Lang(defaultLanguage, path);

    function translate(props) {
        translate.i18n = i18n;
        let {keys, insertions = []} = props;
        let lang = props[storeLanguageKey];
        let result = '';
        if (!lang) {
            throw new Error('Property "language key" required react-redux-translate is undefined')
        }
        if (!keys) {
            throw new Error('Property "keys" required react-redux-translate instance (path to value) is undefined')
        }
       keys = (Array.isArray(keys) && keys) || (typeof keys === 'string' && keys.split('\.'));
        if (!keys || !keys.length)
            throw new Error("Invalid 'keys' property passed to react-redux-translate instance.");
        if (lang !== i18n.lang) {
            i18n.defineSource(lang);
        }
        const source = i18n.langSource;
        try {
            result = keys.reduce((acc, key) => acc[key], source);
        }catch(err) {
            console.error(err);
            throw new Error("Invalid props passed to react-redux-translate. Obtained language source is not valid.")
        }
        if (typeof result !== 'string') {
            throw new Error(`Invalid 'keys' property passed to react-redux-translate! Value to return ${JSON.stringify(result)}, Keys ${JSON.stringify(keys)}`);
        }
        if (insertions.length) {
            return insertions.reduce((acc, ins) => acc.replace('${}', ins), string)
        }
        return result;
    }

    return translate;
}

module.exports = translator;
