# TS Package Template

This is a template for creating a new TS package. It contains a basic
directory structure and a few files to get you started.

## What's included

- [x] TypeScript
- [x] Build tool: Tsup
- [x] Linter: Eslint
- [x] Code formatter: Prettier
- [x] Test suite: Vitest
- [x] Versioning: Changesets
- [x] CI/CD: Github Actions

## Structure

The main parts of the template are:

    .
    ├── lib
    │   ├── index.ts
    |── index.ts
    ├── package.json

All logic should be implemented in the `lib` directory. The `index.ts` file
in the root directory only exports the `lib` directory. This is to make it easy
to import the package in other packages.
