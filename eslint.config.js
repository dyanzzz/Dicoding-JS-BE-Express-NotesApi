import globals from 'globals';
import { configs as jsConfigs } from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.node } },
  jsConfigs.recommended,
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-underscore-dangle': 'off',
      'no-param-reassign': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'no-undef': 'off',
    }
  }
];