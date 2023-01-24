# Validate Portuguese Ids

[![npm version](https://badge.fury.io/js/validate-pt-id.svg)](https://badge.fury.io/js/validate-pt-id)

Validate and generate CC (Citizen Identity Card) and NIF (Personal Tax Number) numbers.

Supports ESM and CommonJS (require/import).

## Installation

```shell
$ yarn add validate-pt-id
```

```shell
$ npm install validate-pt-id
```

```shell
$ pnpm install validate-pt-id
```

## Usage

```typescript
import { generateNif } from 'validate-pt-id';

const nif = generateNif(); // 238043266
```

```typescript
import { validateNif } from 'validate-pt-id';

const isValidNif = validateNif('238043266'); // true
```

```typescript
import { generateCc } from 'validate-pt-id';

const cc = generateCc(); // 168893797ZY2
```

```typescript
import { validateCc } from 'validate-pt-id';

const isValidCc = validateCc('168893797ZY2'); // true
```
