'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    // A `.jsx` extension is not required for files containing JSX.
    'react/jsx-filename-extension': 0,
    // This rule struggles with flow and class properties.
    'react/sort-comp': 0,
    // We use global requires in various places, e.g. code splitting instances.
    'global-require': 0,
    // Ignore linebreak style. The CRLF / LF endings wont matter if a windows user correctly
    // converts CRLF to LF upon commits; otherwise there are errors every line.
    'linebreak-style': 0,
    // Other Ueno rules
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'padded-blocks': 0,
    'consistent-return': 0,
    'no-confusing-arrow': 0,
    'react/require-extension': 0,
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': ['error', {
      forbid: ['any']
    }],
    // Allow useful console logging
    'no-console': ['error', {
      allow: ['info', 'warn', 'error']
    }],
    // Allow ++ in for loops
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
    // Allow reassigning props of objects, e.g. `foo.bar = 2`
    'no-param-reassign': ['error', {
      props: false
    }],
    "function-paren-newline": ["error", "consistent"],
    "object-curly-newline": ["error", { "consistent": true }],

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/339
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "a" ],
    }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
          '.scss'
        ],
        moduleDirectory: [
          'node_modules',
          'shared'
        ]
      }
    }
  }
};
