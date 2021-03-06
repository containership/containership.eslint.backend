'use strict';

module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "brace-style": [
            2,
            "1tbs",
            { "allowSingleLine": false }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "eqeqeq": 2,
        "curly": [
            2,
            "all"
        ],
        "comma-dangle": [
            2,
            "never"
        ],
        "comma-spacing": [
            2,
            { "before": false, "after": true }
        ],
        "accessor-pairs": 2,
        "constructor-super": 2,
        "arrow-spacing": [2, { "before": true, "after": true }],
        "block-spacing": [2, "always"],
        "handle-callback-err": [2, "^(err|error)$" ],
        "no-const-assign": 2,
        "no-cond-assign": 2,
        "no-var": 2,
        "no-octal": 2,
        "no-redeclare": 2,
        "quotes": [2, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "no-octal-escape": 2,
        "strict": [2, "global"],
        "semi": [
            "error",
            "always"
        ],
        "keyword-spacing": ["error", { "after": true, "before": true, "overrides": {
            "catch": { "after": false },
            "if": { "after": false },
            "for": { "after": false }
        }}],
        "no-multi-spaces": 2,
        "no-irregular-whitespace": 2,
        "no-trailing-spaces": 2,
        "space-before-blocks": [2, "always"],
        "no-regex-spaces": 2,
        "space-before-function-paren": [2, {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],

        // import plugin rules
        "import/no-unresolved": [2, { "commonjs": true }]
    }
};
