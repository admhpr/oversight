---
title: a wasm way of life
date: 2021-29-01T05:02
desc: coways game of life in wasm
tags:
  - wasm
  - rust
---

After a number of weeks getting to grips with the basics of Rust and some of the syntax I'm going to explore how we can use Rust code with JavaScript via Web Assembly.

### Getting Started

I'll be using a template to get started, the folks over at [rustwasm](https://github.com/rustwasm) have set up the boiler plate to get started. 

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
 
