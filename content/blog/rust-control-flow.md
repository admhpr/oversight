---
title: control flow in rust
date: 2020-12-27T06:11
desc: A look at basic building blocks of rust
tags:
  - rust
---

Deciding what piece of code to run based on a whether a condition is met or not is the essence of control flow in code. The most common of which in most languages (including Rust) are `if` expressions and `loops`.

### if Expressions

An `if` expression allows you to branch your code depending on conditions. You provide a condition and then state, “If this condition is met, run this block of code. If the condition is not met, do not run this block of code.”

`src/main.rs`
```rust
fn main() {
    let number = 3;

    if number < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }
}
```
The above snippet is pretty self explanatory, if the number is less than `5` it prints "condition was true" and if the number is greater than 5 it "condition was false". 

Optionally, we can also include an `else` expression, which we chose to do here, to give the program an alternative block of code to execute should the condition evaluate to false. If you don’t provide an else expression and the condition is false, the program will just skip the if block and move on to the next bit of code.

Note that the expression being checked in the `if` expression must be of type `bool`. Rust will not automatically try to convert non-Boolean types to a Boolean. 

### Handling Multiple Conditions with else if

You can have multiple conditions by combining `if` and `else` in an `else if` expression. For example:

```rust
fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("number is divisible by 4");
    } else if number % 3 == 0 {
        println!("number is divisible by 3");
    } else if number % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }
}
```

### Using if in a let Statement

Because if is an expression, we can use it on the right side of a `let` statement.

```rust
fn main() {
    let condition = true;
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {}", number);
}
```

The value options provided in the `if` expression must be of the same type, or the compiler will throw an error. Rust needs to know at compile time what type the number variable is and cannot do that if the value of `number` is determined at runtime.

### Repetition with Loops

It’s often useful to execute a block of code more than once. For this task, Rust provides several loops. A loop runs through the code inside the loop body to the end and then starts immediately back at the beginning.

Rust has three kinds of loops: `loop`, `while`, and `for`.

#### Repeating Code with loop

The `loop` keyword tells Rust to execute a block of code over and over again forever or until you explicitly tell it to stop.

```rust
fn main() {
    loop {
        println!("again!");
    }
}
```
When we run this program, we’ll see `again!` printed over and over continuously until we stop the program manually (using `ctrl-c` to interrupt at the terminal).

Fortunately, Rust provides another, more reliable way to break out of a loop. You can place the `break` keyword within the loop to tell the program when to stop executing the loop.








### Returning Values from Loops