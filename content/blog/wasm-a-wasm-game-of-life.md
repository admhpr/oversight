---
title: a wasm way of life
date: 2021-29-01T05:02
desc: coways game of life in was
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
