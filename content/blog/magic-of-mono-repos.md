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
- npm  >= [v7](https://github.com/npm/cli) `npm i -g npm@7`

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
npm i <package-dep> -w <folder name>
```
dev

```bash
npm i -D <package-dep> -w <folder name>
```
### TypeScript Config
### Tasks
### Task Flow
### Publishing
