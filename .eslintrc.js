module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/require-default-props': 'warn',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1
    }],
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-array-index-key': 'warn',
    'react/destructuring-assignment': 'off',
    'react/no-unused-prop-types': 'warn',
    'no-underscore-dangle': 'off',
    'no-sparse-arrays': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'no-alert': 'warn',
    'max-len': ['warn', {
      code: 120,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false
    }]
  }
};
