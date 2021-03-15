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

Run this command within the project directory:

```bash
npm init wasm-app www
```
Here's the output in the `wasm-game-of-life/www` directoy:

```bash
wasm-game-of-life/www/
├── bootstrap.js
├── index.html
├── index.js
├── LICENSE-APACHE
├── LICENSE-MIT
├── package.json
├── README.md
└── webpack.config.js
```

Let's take a tour of the files.

`wasm-game-of-life/www/package.json`

This package.json comes pre-configured with `webpack` and `webpack-dev-serve`r dependencies, as well as a dependency on `hello-wasm-pac`k, which is a version of the initial wasm-pack-template package that has been published to npm.

`wasm-game-of-life/www/webpack.config.js`

This file configures webpack and its local development server. It comes pre-configured, and you shouldn't have to tweak this at all to get webpack and its local development server working.

`wasm-game-of-life/www/index.html`

This is the root HTML file for the Web page. It doesn't do much other than load bootstrap.js, which is a very thin wrapper around index.js.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello wasm-pack!</title>
  </head>
  <body>
    <script src="./bootstrap.js"></script>
  </body>
</html>

```
`wasm-game-of-life/www/index.js`

The index.js is the main entry point for our Web page's JavaScript. It imports the hello-wasm-pack npm package, which contains the default wasm-pack-template's compiled WebAssembly and JavaScript glue, then it calls hello-wasm-pack's greet function.

```javascript
import * as wasm from "hello-wasm-pack";

wasm.greet();
```

### Install Dependencies

First, ensure that the local development server and its dependencies are installed by running `npm install` within the `wasm-game-of-life/www` subdirectory:

```bash
npm install
```
This will read `package.json` and install the dependencies listed there, including the webpack javascript bundler and development server.

> Note that webpack is not required for working with Rust and WebAssembly, it is just the bundler and development server we've chosen for convenience here. Parcel and Rollup should also support importing WebAssembly as ECMAScript modules. You can also use Rust and WebAssembly [without a bundler](https://rustwasm.github.io/docs/wasm-bindgen/examples/without-a-bundler.html) if you prefer!

### Using local package in www 

Rather than use the `hello-wasm-pack package` from npm, we want to use our local `wasm-game-of-life` package instead. This will allow us to incrementally develop our Game of Life program.

Open up `wasm-game-of-life/www/package.json` and next to "devDependencies", add the "dependencies" field, including a "wasm-game-of-life": "file:../pkg" entry:

```json
{
  // ...
  "dependencies": {                     // Add this three lines block!
    "wasm-game-of-life": "file:../pkg"
  },
  "devDependencies": {
    //...
  }
}
```

Next, modify `wasm-game-of-life/www/index.js` to import `wasm-game-of-life` instead of the `hello-wasm-pack` package:

```javascript
import * as wasm from "wasm-game-of-life";

wasm.greet();
```
Since we declared a new dependency, we need to install it:

```bash
npm install
```
The web page is now ready to be served locally!

### Serving Locally

Next, open a new terminal for the development server. Running the server in a new terminal lets us leave it running in the background, and doesn't block us from running other commands in the meantime. In the new terminal, run this command from within the `wasm-game-of-life/www` directory:

```bash
npm run start
```
Navigate your Web browser to http://localhost:8080/ and you should be greeted with an alert message. Anytime you make changes and want them reflected on http://localhost:8080/, just re-run the wasm-pack build command within the wasm-game-of-life directory.

That's it, we have a hello world!
