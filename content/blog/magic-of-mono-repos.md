---
title: magic of mono repos
date: 2022-01-05T05:02
desc: why mono repos are magic 🧙
tags:
  - recipes
  - typescript
---

## 1.5 package

The value proposition of a well setup mono-repo, N packages with the maintainence overhead on 1.5. That's it, that's the goal. Below describes one of many approaches to achieve that using typescript as the primary language.

### Prerequisite's

- node >= [v14.18.2](https://nodejs.org/download/release/v14.18.2/)
- npm  >= [v8](https://github.com/npm/cli)

### Optional

use [nvm](https://github.com/nvm-sh/nvm) to manage node versions

touch `.nvmrc`

```
v14.18.2
```
once installed calling `nvm use` from root will enable the correct version if not already enabled

### Setup

use [npm workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces)

add to `package.json`

```json
{
  "name": "my-workspaces-powered-project",
  "workspaces": [
    "packages/*"
  ]
}
```
add deps to workspace

```bash
npm i <workspace-dep>
```
dev

```bash
npm i -D <workspace-dev-dep>
```
add deps to package

```bash
npm i <package-dep> -w <workspace-name>
```
dev

```bash
npm i -D <package-dep> -w <workspace-name>
```

### Folder Structure

```
packages
   ├── <package-a>
   |-- <package-b>
   └── <package-c>

```

### Clean Up

install [rimraf](https://www.npmjs.com/package/rimraf) at workspace level,

add to scripts for each package:

`rimraf dist *.tsbuildinfo`

### TypeScript Config

install deps:

use [composite](https://www.typescriptlang.org/tsconfig#composite) ts projects to speed up build times

base ts config in packages root

`packages/`

```json
{
    "compilerOptions": {
        "allowJs": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "inlineSourceMap": false,
        "listEmittedFiles": false,
        "listFiles": false,
        "module": "esnext",
        "moduleResolution": "node",
        "noFallthroughCasesInSwitch": true,
        "noUnusedLocals": false,
        "noUnusedParameters": false,
        "pretty": true,
        "resolveJsonModule": true,
        "skipLibCheck": true,
        "strict": true,
        "target": "es2015",
        "traceResolution": false,
        "types": ["node", "jest"],
    },
    "compileOnSave": false,
    "exclude": ["node_modules"]
}
```
reference ts config

```json
{
    "files": [],
    "references": [
        { "path": "<package-a>" },
        { "path": "<package-b>" }
    ]
}
```
ts config per package

`packages/<package-?>`

```json
{
  "extends": "../tsconfig.settings.json",
  "include": ["src"],
  "compilerOptions": {
    "composite": true,
    ...
  }
}
```

### Tasks

Managing task flows with [lerna](https://lerna.js.org/)

install:

`npm i -WD lerna`

setup a `scripts` folder like so:

```
scripts
├── packages
└── workspace
```
`mkdir -p scripts/{packages,workspace}`

* for each workspace task add to `scripts/workspace`
* for each package task add to `scripts/packages`

#### Running tasks based on git hooks

tool: [husky](https://github.com/typicode/husky)

```
npm i -WD husky
```

`npx husky add .husky/pre-commit`

```
#!/bin/sh
npx lint-staged
```

#### Appling lint tasks only to staged files

tool: [lint-staged](https://github.com/okonet/lint-staged)

```
npm i -WD lint-staged
```

#### Lint

tool: [eslint](https://eslint.org/)

install (with ts deps):

`npm i -WD eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

setup ignores, touch `.eslintignore`

add

```
node_modules
```

add base config to project root __not__ packages root, this helps IDEs like vscode find the lint file

`touch .eslintrc`

```json
{
  "env": {
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "prefer-const": "error",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off"
  }
```

in each package directory `touch .eslintrc`

a thin lint config extending from base, additional per package rules can be added here.

```json
{
  "extends": "../../.eslintrc",
  "parserOptions": {
    "project": "tsconfig.json"
  }
}
```

create a `lint.sh` script in `scripts/workspace`

```
#!/usr/bin/env sh
echo "┏━━━ 🕵️‍♀️ LINT WORKSPACE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npm run lint --workspaces
```

create a `lint.sh` script in `scripts/packages`

```
#!/usr/bin/env sh
echo "┏━━━ 🕵️‍♀️ LINT $(pwd) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
eslint src --ext ts,js
```

#### Format

tool: [prettier](https://prettier.io/)

install:

`npm i -WD prettier`

touch `.prettierignore`

add

```
node_modules
```
#### Dev


#### Build
#### Version
#### Package
#### Release
### Task Flow
### Publishing
