---
title: functions in rust
date: 2020-12-19T07:02
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

Function bodies are made up of a series of statements optionally ending in an expression. So far, we’ve only covered functions without an ending expression, but you have seen an expression as part of a statement. Because Rust is an expression-based language, this is an important distinction to understand. Other languages don’t have the same distinctions, so let’s look at what statements and expressions are and how their differences affect the bodies of functions.

__Statements__ are instructions that perform some action and do not return a value. __Expressions__ evaluate to a resulting value.

Creating a variable and assigning a value to it with the `let` keyword is a statement. `let y = 6;` is a statement.

```rust
fn main() {
    let y = 6;
}
```
Function definitions are also statements; the entire preceding example is a statement in itself.

Statements do not return values. Therefore, you can’t assign a let statement to another variable, as the following code tries to do; you’ll get an error:

```rust
fn main() {
    let x = (let y = 6);
}
```
When you run this program, the error you’ll get looks like this:

```bash
$ cargo run
   Compiling functions v0.1.0 (file:///projects/functions)
error: expected expression, found statement (`let`)
 --> src/main.rs:2:14
  |
2 |     let x = (let y = 6);
  |              ^^^
  |
  = note: variable declaration using `let` is a statement
```

The `let y = 6` statement does not return a value, so there isn’t anything for `x` to bind to. This is different from what happens in other languages, such as C and Ruby, where the assignment returns the value of the assignment. In those languages, you can write `x = y = 6` and have both `x` and `y` have the value 6; that is not the case in Rust.

Expressions evaluate to something and make up most of the rest of the code that you’ll write in Rust. Consider a simple math operation, such as `5 + 6`, which is an expression that evaluates to the value `11`. Expressions can be part of statements: below, the 6 in the statement `let y = 6;` is an expression that evaluates to the value 6. Calling a function is an expression. Calling a macro is an expression. The block that we use to create new scopes, `{}`, is an expression, for example:

```rust
fn main() {
    let x = 5;

    let y = {
        let x = 3;
        x + 1
    };

    println!("The value of y is: {}", y);
}

```

take note of this block:

```rust
{
    let x = 3;
    x + 1
}

```


In this case, evaluates to `4`. That value gets bound to y as part of the let statement. Note the `x + 1` line without a semicolon at the end, which is unlike most of the lines you’ve seen so far. Expressions do not include ending semicolons. If you add a semicolon to the end of an expression, you turn it into a statement, which will then not return a value.

### Functions with Return Values

Functions can return values to the code that calls them. Return types are not named, but their values are declared using the an arrow `->`. In Rust, the return value of the function is synonymous with the value of the final expression in the block of the body of a function. You can return from a function early by using the `return` keyword and specifying a value. Most functions however return the last expression implicitly. For example:

```rust
fn five() -> i32 {
    5
}

fn main() {
    let x = five();

    println!("The value of x is: {}", x);
}
```
There are no function calls, macros, or even `let` statements in the `five` function—just the number `5` by itself. Which is a perfectly valid function in Rust. Note that the functions return type is specified as `-> i32`. 

The `5` in `five` is the function’s return value, which is why the return type is `i32`.

Another example:

```rust
fn main() {
    let x = plus_one(5);

    println!("The value of x is: {}", x);
}

fn plus_one(x: i32) -> i32 {
    x + 1
}
```

Running this code will print `The value of x is: 6`. But if we place a semicolon at the end of the line containing `x + 1`, changing it from an expression to a statement, we’ll get an error.

```bash
$ cargo run
   Compiling functions v0.1.0 (file:///projects/functions)
error[E0308]: mismatched types
 --> src/main.rs:7:24
  |
7 | fn plus_one(x: i32) -> i32 {
  |    --------            ^^^ expected `i32`, found `()`
  |    |
  |    implicitly returns `()` as its body has no tail or `return` expression
8 |     x + 1;
  |          - help: consider removing this semicolon

error: aborting due to previous error

For more information about this error, try `rustc --explain E0308`.
error: could not compile `functions`.

To learn more, run the command again with --verbose.
```
The main error message, “mismatched types,” reveals the core issue with this code. The definition of the function plus_one says that it will return an i32, but statements don’t evaluate to a value, which is expressed by (), an empty tuple. Therefore, nothing is returned, which contradicts the function definition and results in an error. In this output, Rust provides a message to possibly help rectify this issue: it suggests removing the semicolon, which would fix the error.