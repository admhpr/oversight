---
title: magic of mono repos
date: 2022-01-05T05:02
desc: a setup guide to a magic mono repo 🧙
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

add path to script in each "scripts" block in the package.json, for the workspace this is located at the root, for packages there is one in each package.

a tool like [scripty](https://github.com/testdouble/scripty) would be ideal here, but they are currently [working on](https://github.com/testdouble/scripty/issues/93) >= npm 7 support, so add the the path to each corresponding key to call the script directly.

run `chmod +x -R scripts` after adding any additonal scripts to the directory.

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

Managing task flows with [lerna](https://lerna.js.org/) and npm

install:

`npm i -WD lerna`

`npx lerna init`

run commands with lerna:

`npx lerna run <script> --scope <package-name>`

run commands with npm:

`npm run <script> -w ./packages/<package-directory>`

`npm run <script> -w <package-name>`


Optional setup a `scripts` folder like so:

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

`npm i -WD husky`

`npx husky add .husky/pre-commit`

```bash
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

`touch scripts/workspace/lint.sh`

```bash
#!/usr/bin/env sh
echo "┏━━━ 🕵️‍♀️ LINT WORKSPACE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npm run lint --workspaces
```

`touch scripts/packages/lint.sh`

```bash
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

`touch scripts/workspace/dev.sh`

add

```bash
#!/usr/bin/env sh
echo "┏━━━ 🏗️ DEV WORKSPACE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npx lerna run dev --parallel
```

`touch scripts/packages/dev.sh`

```bash
#!/usr/bin/env sh
echo "┏━━━ 🏗️ DEV PACKAGE $(pwd) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
tsc -w
```
#### Build

`touch scripts/workspace/build.sh`

```bash
#!/usr/bin/env sh
echo "┏━━━ 📦 Building Workspace ━━━━━━━━━━━━━━━━━━━"
npx tsc -b packages
```bash

#### Version

`touch scripts/workspace/version.sh`

```bash
#!/usr/bin/env sh
echo "┏━━━ 📋 CREATING VERSION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npx lerna version
```
`lerna.json`

```json
{
  "packages": [
    "packages/*"
  ],
  "command": {
    "version": {
      "allowBranch": [
        "main"
      ],
      "ignoreChanges": ["**/__fixtures__/**", "**/__tests__/**"],
      "message": "new version created"
    }
  },
  "version": "independent"
}
```

key things here, version independant ensures each package has seperate verisons, `command.version.allowBranch` ensures versions can only be created on the "main" branch, check out more info on that in the [lerna docs](https://github.com/lerna/lerna/tree/main/commands/version).

#### Package

ensure there is an appropriate files section in `package.json`, below covers the required properties of `name`, `version` as well some other properties that might be useful like `liscence` and `keywords`. 

```json
{
  "name": "<package-a>",
  "version": "1.0.0",
  "description": "does something awesome",
  "license": "MIT",
  "repository": "@<my-org>/<package-a>",
  "keywords": [
    "language",
    "other-thing"
  ],
  "main": "dist/index.js",
  "files": [
    "dist"
  ],
  "dependencies": {},
  "scripts": {
    ...
  }
}
```
#### Publish

locally we can use [verdaccio](https://verdaccio.org/docs/what-is-verdaccio) to allow us to experiment with what out publish prcess will look like without polluting npm.

#### Reference

* [Mike Norths's monorepo course](https://frontendmasters.com/courses/monorepos/)
* [ts-js monorepo](https://github.com/mike-north/js-ts-monorepos/tree/solution)
* [npm docs](https://docs.npmjs.com/cli/v8/using-npm/workspaces)
* [lerna docs](https://lerna.js.org/)

