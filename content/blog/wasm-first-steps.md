---
title: wasm first steps
date: 2021-01-29T05:02
desc: first steps with wasm
tags:
  - wasm
  - rust
---

After a number of weeks getting to grips with the basics of Rust and some of the syntax I'm going to explore how we can use Rust code with JavaScript via Web Assembly.

### Getting Started

I'll be using a template to get started, the folks over at [rustwasm](https://github.com/rustwasm) have set up the boiler plate to get started. Note that [cargo generate](https://github.com/cargo-generate/cargo-generate) is also used.

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template
```

using `wasm-game-of-life` as name of the project.

```bash
cd wasm-game-of-life
```
here are the contents:

 ```bash
 wasm-game-of-life/
├── Cargo.toml
├── LICENSE_APACHE
├── LICENSE_MIT
├── README.md
└── src
    ├── lib.rs
    └── utils.rs
 ```
 
 an overview
 
 `Cargo.toml`

Here is where dependencies and meta data are defined for the cargo, which is Rust's package manager and build tool. As we used a template to inialise the project, the file is already pre-configured with the `wasm-bindgen` dependency.

`src/lib.rs`
This file is the root of the Rust crate that is going to be compiled into WebAssembly. It uses `wasm-bindgen` to interface with JavaScript. It currently exports the `greet` function which uses the `window.alert` method to alert a message.

```rust
mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-game-of-life!");
}

```

`src/utils.rs`

The src/utils.rs module provides common utilities to make working with Rust compiled to WebAssembly easier.


### Building the project

I'll be using [wasm-pack](https://github.com/rustwasm/wasm-pack) to orchestrate the following build steps:

* Ensure that we have Rust 1.30 or newer and the `wasm32-unknown-unknown` target installed via `rustup`,
* Compile the Rust sources into a WebAssembly `.wasm` binary via cargo,
* Use `wasm-bindgen` to generate the JavaScript API for using our Rust-generated WebAssembly.

The above points can be satisfied, the following command is ran inside the project directory:
`wasm-pack build`

When the build is completed, artifacts are generated in the `pkg` directory, with the following content:

```bash
pkg/
├── package.json
├── README.md
├── wasm_game_of_life_bg.wasm
├── wasm_game_of_life.d.ts
└── wasm_game_of_life.js
```

`wasm-game-of-life/pkg/wasm_game_of_life.d.ts`

The `.d.ts` file contains Typescript type declarations for the JavaScript glue. One advantage of this is the ability to have calls into WebAssembly functions type checked, meaning an IDE can provide autocompletions and suggestions.

```typescript
export function greet(): void;
```

`wasm-game-of-life/pkg/package.json`

The [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) file contains metadata about the generated JavaScript and WebAssembly package. This is used by npm and JavaScript bundlers to determine dependencies across packages, package names, versions, and a bunch of other stuff. It helps Rust (and ultimately wasm) integrate with JavaScript tooling and allows us to publish the package to npm.

```json
{
  "name": "wasm-game-of-life",
  "collaborators": [
    "Your Name <your.email@example.com>"
  ],
  "description": null,
  "version": "0.1.0",
  "license": null,
  "repository": null,
  "files": [
    "wasm_game_of_life_bg.wasm",
    "wasm_game_of_life.d.ts"
  ],
  "main": "wasm_game_of_life.js",
  "types": "wasm_game_of_life.d.ts"
}
```

### Adding the package it to a web page

To add the package to a web page we can bootstrap a web based wasm project using the [create-wasm-app](https://github.com/rustwasm/create-wasm-app) JavaScript project template.

