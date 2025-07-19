import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      rules: {
  'import/no-cycle': 0,
  'no-console': 0,
  'react/prop-types': 0,
  'linebreak-style': 0,
  'react/state-in-constructor': 0,
  'import/prefer-default-export': 0,
  'max-len': [2, 250],
  'object-curly-newline': 0,
  'react/jsx-filename-extension': 0,
  'react/jsx-one-expression-per-line': 0,
  'jsx-a11y/click-events-have-key-events': 0,
  'jsx-a11y/alt-text': 0,
  'jsx-a11y/no-autofocus': 0,
  'jsx-a11y/no-static-element-interactions': 0,
  'react/no-array-index-key': 0,
  'no-param-reassign': 0,
  'react/react-in-jsx-scope': 0,
  'react/jsx-props-no-spreading': 0,
  'no-sparse-arrays': 0,
}
    },
  },
])
