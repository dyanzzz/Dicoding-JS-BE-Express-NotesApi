import globals from 'globals';
import js from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
    daStyle,
    { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
    { languageOptions: { globals: globals.node } },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        rules: {
            'indent': ['error', 4],
            'no-trailing-spaces': 'error',
            'linebreak-style': ['error', 'windows'],
        }
    }
];