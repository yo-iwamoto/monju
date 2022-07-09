/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    // off
    'react/react-in-jsx-scope': 'off', // use React18
    'jsx-a11y/anchor-is-valid': 'off', // for next/link
    'react/display-name': 'off',
    'react/prop-types': 'off',

    // custom
    'import/order': [
      'error',
      { groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'] },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // ignore var start with _
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: '.',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
