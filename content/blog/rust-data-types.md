---
title: data types in rust
date: 2020-12-15T06:02
desc: A look at basic building blocks of rust
tags:
  - rust
---

## Data Types

Every value in Rust has a data type. This piece of additional information let's Rust know how to work with the data.

Rust is [statically typed](https://www.techopedia.com/definition/22321/statically-typed), meaning that it must know all variables at compile time. The compiler can usually infer what type we want to use based on the value and how we use it. 

Sometimes there are cases where the value can be parsed from a say a string to a number and therefore there could be potentially a number of types associated with that value. In those cases type annotation is important.

```rust
let meaning_of_life: u32 = "42".parse().expect("Not a number!");
```

Without type annotation Rust will display the following:

```bash
$ cargo build
   Compiling no_type_annotations v0.1.0 (file:///projects/no_type_annotations)
error[E0282]: type annotations needed
 --> src/main.rs:2:9
  |
2 |     let guess = "42".parse().expect("Not a number!");
  |         ^^^^^ consider giving `guess` a type

error: aborting due to previous error

For more information about this error, try `rustc --explain E0282`.
error: could not compile `no_type_annotations`.

To learn more, run the command again with --verbose.

```

Here, the compiler is letting us know it needs more information on the intended data type of the parsed string.

