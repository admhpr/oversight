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
2 |     let meaning_of_life = "42".parse().expect("Not a number!");
  |         ^^^^^ consider giving `meaning_of_life` a type

error: aborting due to previous error

For more information about this error, try `rustc --explain E0282`.
error: could not compile `no_type_annotations`.

To learn more, run the command again with --verbose.

```

Here, the compiler is letting us know it needs more information on the intended data type of the parsed string.

## Scalar Types

A [scalar](https://www.techopedia.com/definition/16441/scalar) type represents a single value. Rust has four primary scalar types:

* integars
* floating-point numbers
* Booleans
* characters

These are pretty common across programming languages, here is a quick refresher:

## Integer

An integer is a number without a fractional component. The table below shows the built-in integer types in Rust. Each variant in the [Signed and Unsigned](https://www.ibm.com/support/knowledgecenter/ssw_aix_72/commprogramming/int_dat_typ.html) columns (for example, i16) can be used to declare the type of an integer value. Below are examples of integer types in Rust.

| length | signed | unsigned |
|--------|--------|----------|
| 8-bit  | i8     | u8       |
| 16-bit | i16    | u16      |
| 32-bit | i32    | u32      |
| 64-bit | i64    | u128     |
| arch   | isize  | usize    |


The isize and usize types depend on the kind of computer your program is running on: 64 bits if you’re on a 64-bit architecture and 32 bits if you’re on a 32-bit architecture

### Integer Literals

You can write integers in any of the forms outlined below

| number literals | example    |
|-----------------|------------|
| decimal         | 78_678     |
| hex             | 0xff       |
| octal           | 0o77       |
| binary          | 0b1111_0000|
| byte (u8 only)  | b'A'       |

Rust defaults integers to `i32` (which will cover the majority of cases), this type is generally the fastest, even on 64-bit systems. The primary situation in which you’d use `isize` or `usize` is when indexing some sort of collection. 

## Floating-Point Types

