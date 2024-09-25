module.exports = {
    "env": {
        "browser": true,
		'commonjs': true,
        // "es2021": true
		'es6': true
    },
    // "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
		'no-unused-vars': [
			'warn',
		]
    }
}
