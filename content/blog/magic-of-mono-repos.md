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

### Setup

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
.
├── packages
│   ├── <package-a>
│   |-- <package-b>
│   └── <package-c>
└── scripts
    ├── packages
    └── workspace
```

### Clean Up

install [rimraf](https://www.npmjs.com/package/rimraf) at workspace level,

add to scripts for each package:

`rimraf dist *.tsbuildinfo`

### TypeScript Config

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
    "composite": true
    ...
  }
}
```

### Tasks

Managing task flows with [lerna](https://lerna.js.org/)

install at workspace level

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

#### Lint
#### Format
#### Dev
#### Build
#### Version
#### Package
#### Release
### Task Flow
### Publishing
