---
title: functions in rust
date: 2021-12-19T07:02
desc: A look at basic building blocks of rust
tags:
  - rust
---

Functions are everywhere in Rust code. The most important function in the language is a function called `main`, which is the entry to many programs. Another key word to take note of is the `fn` keyword, which is a way to declare new functions.

Rust uses [snake case](https://en.wikipedia.org/wiki/Snake_case) as the convention in function and variable names. Quick example of a couple of functions including `main`:

```rust
fn main() {
    println!("Hello, world!");

    another_function();
}

fn another_function() {
    println!("Another function.");
}
```
Function definitions in Rust start with fn and have a set of parentheses after the function name. The curly brackets tell the compiler where the function body begins and ends.

We can call any function we’ve defined by entering its name followed by a set of parentheses. Because `another_function` is defined in the program, it can be called from inside the `main` function. Note that we defined `another_function` after the `main` function in the source code; we could have defined it before as well. Rust doesn’t care where you define your functions, only that they’re defined somewhere.

### Function Parameters

Some function will have parameters as part of the functions signature. When concrete values are passed (technically called arguments) those values are used within the function.


```rust
fn main() {
    another_function(5);
}

fn another_function(x: i32) {
    println!("The value of x is: {}", x);
}

```

The declaration of `another_function` has one parameter named `x`. The type of `x` is specified as `i32`. When 5 is passed to another_function, the `println!` macro puts 5 where the pair of curly brackets were in the format string.

In function signatures the type of argument a function should expect is required. This is a deliberate decision in Rust’s design: requiring type annotations in function definitions means the compiler almost never needs you to use them elsewhere in the code to figure out what you mean.

When you want a function to have multiple parameters, separate the parameter declarations with commas, like so:

```rust
fn main() {
    another_function(5, 6);
}

fn another_function(x: i32, y: i32) {
    println!("The value of x is: {}", x);
    println!("The value of y is: {}", y);
}
```

### Function Bodies

