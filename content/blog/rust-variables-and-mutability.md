---
title: variables and mutability in rust
date: 2020-12-11T11:02
desc: A look at basic building blocks using rust
tags:
  - rust
---

## First Steps

Variables in rust are [immutable](https://www.dictionary.com/browse/immutable) by default. a helpful hint by the language to write code that is easy to follow and unwanted side effects are reduced.

Once a immutable variable is bound to a name, it cannot change. Let's have a quick look at what that means,

`src/main.rs`
```rust
fn main() {
    let x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
}

```
The above code will not compile. We are trying to change the value of `x` from 5 to 6. The compiler will complain pretty loudly in fact.

```bash
$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
error[E0384]: cannot assign twice to immutable variable `x`
 --> src/main.rs:4:5
  |
2 |     let x = 5;
  |         -
  |         |
  |         first assignment to `x`
  |         help: make this binding mutable: `mut x`
3 |     println!("The value of x is: {}", x);
4 |     x = 6;
  |     ^^^^^ cannot assign twice to immutable variable

error: aborting due to previous error

For more information about this error, try `rustc --explain E0384`.
error: could not compile `variables`.

To learn more, run the command again with --verbose.

```
This is a good thing, the compiler is nudging you to solving the issue at hand. Take note of `cannot assign twice to immutable variable x`.

Now we know we have two options to achieve the desired output. We can either create a new immutable variable and assign `6` to it. Or, we can make `x` mutable. If we want to make `x` mutable we can add the `mut` keyword to the variable declaration.

`src/main.rs`
```rust
fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
}

```
We can now run the program

```bash
$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
    Finished dev [unoptimized + debuginfo] target(s) in 0.30s
     Running `target/debug/variables`
The value of x is: 5
The value of x is: 6
```
In some cases, you’ll want to make a variable mutable because it makes the code more convenient to write than if it had only immutable variables.

There are always going to be trade offs when choosing to make things immutable or mutable. For instance if the data structure was particularly large it may make sense to mutate in place rather than save a copy and re-allocate the data. With small data it may make sense to create new instances of the data and writing it in a more functional style, the drop in performance may a price worth paying for legibility.

## Variables vs Constants

Having an immutable variable may sound like that variable is really a constant. However in rust constants cannot be marked as mutable using `mut`. They are always immutable.

You declare constants using the `const` keyword instead of let as you would with a variable. You also must annotate a type. They can be declared in any scope including the global scope which makes them useful for values that many parts of code need to know about.

The last difference is that constants may be set only to a constant expression, not the result of a function call or any other value that could only be computed at runtime.

Below is how you would declare a constant for `MAX` with a value set to 100,000.

```rust
const MAX: u32 = 100_000
```
Constants stick around for the entire time a program runs within the scope in which it is declared. These values are the non-changing hardcoded values like `SPEED_OF_SOUND` or `HOURS_IN_DAY`. They let maintainers know that these values are intentionally hardcoded. It also allows these values to be changed in one place, should they need to be updated in the future.

## Shadowing

You can declare a new variable with the same name as a previous variable, and the new variable shadows the previous variable. The first variable is __shadowed__ by the second. This means the second variables value is what appears when the variable is used. A quick example:

`src/main.rs`
```rust
fn main() {
    let x = 5;

    let x = x + 1;

    let x = x * 2;

    println!("The value of x is: {}", x);
}
```

This program first binds `x` to a value of `5`. Then it shadows `x` by repeating `let x =`, taking the original value and adding `1` so the value of `x` is then `6`. The third let statement also shadows `x`, multiplying the previous value by `2` to give `x` a final value of `12`. When we run this program, it will output the following:

```bash
$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
    Finished dev [unoptimized + debuginfo] target(s) in 0.31s
     Running `target/debug/variables`
The value of x is: 12

```
Shadowing is different from marking a variable as `mut`. We would get a compile-time error
if we accidentally try to reassign to this variable without using the `let` keyword. Using `let` we can perform transformations on a value but have the variable be immutable after those transformations have occurred.

The other difference between `mut` and shadowing is that because we’re effectively creating a new variable when we use the `let` keyword again, we can change the type of the value but reuse the same name. For example, say our program asks a user to show how many spaces they want between some text by inputting space characters, but we really want to store that input as a number:

```rust
let spaces = "   ";
let spaces = spaces.len();
```
This is valid as we use the keyword `let` which ensures the second `spaces` is a brand new variable. This saves us the need to come up with new names for each assignment, like `spaces_str` or `spaces_num`. Note that using `mut` will not achieve the desired outcome:

```rust
    let mut spaces = "   ";
    spaces = spaces.len();
```

```bash
$ cargo run
   Compiling variables v0.1.0 (file:///projects/variables)
error[E0308]: mismatched types
 --> src/main.rs:3:14
  |
3 |     spaces = spaces.len();
  |              ^^^^^^^^^^^^ expected `&str`, found `usize`

error: aborting due to previous error

For more information about this error, try `rustc --explain E0308`.
error: could not compile `variables`.

To learn more, run the command again with --verbose.
```
I'll be looking at data types next