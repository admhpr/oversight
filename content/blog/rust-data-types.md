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

### Integer

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

### Floating-Point Types

Rust also has two primitive types for floating-point numbers, which are numbers with decimal points. Rust’s floating-point types are `f32` and `f64`, which are 32 bits and 64 bits in size, respectively. The default type is f64 because on modern CPUs it’s roughly the same speed as `f32` but is capable of more precision.

Here’s an example that shows floating-point numbers in action:

`src/main.rs`
```rust
fn main() {
    let x = 2.0; // f64

    let y: f32 = 3.0; // f32
}
```

Floating-point numbers are represented according to the [IEEE-754 standard](https://en.wikipedia.org/wiki/IEEE_754). The f32 type is a single-precision float, and f64 has double precision.

### Numeric Operations

Rust supports the basic mathematical operations you’d expect for all of the number types: addition, subtraction, multiplication, division, and remainder. The following code shows how you’d use each one in a let statement:

`src/main.rs`
```rust
fn main() {
    // addition
    let sum = 5 + 10;

    // subtraction
    let difference = 95.5 - 4.3;

    // multiplication
    let product = 4 * 30;

    // division
    let quotient = 56.7 / 32.2;

    // remainder
    let remainder = 43 % 5;
}
```
Each expression in these statements uses a mathematical operator and evaluates to a single value, which is then bound to a variable. See [here](https://doc.rust-lang.org/stable/book/appendix-02-operators.html) for a full list of operators.


### Boolean

As in most other programming languages, a Boolean type in Rust has two possible values: true and false. Booleans are one byte in size. The Boolean type in Rust is specified using bool. For example:

`src/main.rs`
```rust
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
```

Boolean types are typically used in control flows such as `if` statements.

### Character Type

Rust’s `char` type is the language’s most primitive alphabetic type, and the following code shows one way to use it. (Note that char literals are specified with single quotes, as opposed to string literals, which use double quotes.)

`src/main.rs`
```rust
fn main() {
    let c = 'z';
    let z = 'ℤ';
    let heart_eyed_cat = '😻';
}
```

Ru jst’s `char` type is four bytes in size and represents a Unicode Scalar Value, which means it can represent a lot more than just ASCII. Accented letters; Chinese, Japanese, and Korean characters; emoji; and zero-width spaces are all valid char values in Rust. Unicode Scalar Values range from `U+0000` to `U+D7FF` and `U+E000` to `U+10FFFF` inclusive. However, a “character” isn’t really a concept in Unicode, so your human intuition for what a “character” is may not match up with what a char is in Rust.

## Compound Types

Compound types can group multiple values into one type. Rust has two primitive compound types: tuples and arrays.

### Tuple Type

A tuple is a general way of grouping together a number of values with a variety of types into one compound type. Tuples have a fixed length: once declared, they cannot grow or shrink in size.

We create a tuple by writing a comma-separated list of values inside parentheses. Each position in the tuple has a type, and the types of the different values in the tuple don’t have to be the same. We’ve added optional type annotations in this example:

`src/main.rs`
```rust
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
```
The variable tup binds to the entire tuple, because a tuple is considered a single compound element. To get the individual values out of a tuple, we can use pattern matching to destructure a tuple value, like this:

`src/main.rs`
```rust
fn main() {
    let tup = (500, 6.4, 1);

    let (x, y, z) = tup;

    println!("The value of y is: {}", y);
}
```
output:

```bash
The value of y is: 6.4
```
This program first creates a tuple and binds it to the variable `tup`. It then uses a pattern with let to take tup and turn it into three separate variables, `x`, `y`, and `z`. This is called __destructuring__, because it breaks the single tuple into three parts. Finally, the program prints the value of y, which is 6.4.

In addition to destructuring through pattern matching, we can access a tuple element directly by using a period (.) followed by the index of the value we want to access. For example:

`src/main.rs`
```rust
fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
```
This program creates a tuple, x, and then makes new variables for each element by using their respective indices. As with most programming languages, the first index in a tuple is 0.
