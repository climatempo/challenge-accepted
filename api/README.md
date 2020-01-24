# Node.js Project Template

This is boilerplate that contains ESLint, .nvmrc, Prettier, Jasmine, CircleCI, and Husky configured for use in Node.js projects.

## Requirements

- Node.js (see .nvmrc);
- Yarn;

## How to Setup?

- Clone or download the repository zip;
- Change the URL of remote (git);
- Update package.json with your project infos (e.g. author, name, version, license);
- Run `yarn install`.

## How to Test?

This repository uses [Jasmine](https://github.com/jasmine/jasmine) as testing framework. All tests files contains `.spec.js` in your filename.
To run tests:

```
  yarn test
```

## How to lint?

This project uses [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) with [Airbnb Style Guide](https://github.com/airbnb/javascript).

```
yarn lint
```
