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

It’s often useful for a program to evaluate a condition within a loop. While the condition is true, the loop runs. When the condition ceases to be true, the program calls `break`, stopping the loop.

```rust
fn main() {
    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);
}
```
Before the loop, we declare a variable named counter and initialize it to `0`. Then we declare a variable named `result` to hold the value returned from the loop. On every iteration of the loop, we add `1` to the counter variable, and then check whether the counter is equal to `10`. When it is, we use the break keyword with the value `counter * 2`. After the loop, we use a semicolon to end the statement that assigns the value to result. Finally, we print the value in `result`, which in this case is 20.

### Conditional Loops with while

It’s often useful for a program to evaluate a condition within a loop. While the condition is true, the loop runs. When the condition ceases to be true, the program calls `break`, stopping the loop. This loop type could be implemented using a combination of `loop`, `if`, `else`, and `break`.

However, this pattern is so common that Rust has a built-in language construct for it, called a `while` loop.

```rust
fn main() {
    let mut number = 3;

    while number != 0 {
        println!("{}!", number);

        number -= 1;
    }

    println!("LIFT OFF!!!");
}
```
```bash
3!
2!
1!
LIFT OFF!!!
```
This construct eliminates a lot of nesting that would be necessary if you used `loop`, `if`, `else`, and `break`, and it’s clearer. While a condition holds true, the code runs; otherwise, it exits the loop.

### Looping Through a Collection with for

You could use the `while` construct to loop over the elements of a collection, such as an array.

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];
    let mut index = 0;

    while index < 5 {
        println!("the value is: {}", a[index]);

        index += 1;
    }
}

```
Here, the code counts up through the elements in the array. It starts at index `0`, and then loops until it reaches the final index in the array (that is, when `index < 5` is no longer true).

This approach is error prone; we could cause the program to panic if the index length is incorrect. It’s also slow, because the compiler adds runtime code to perform the conditional check on every element on every iteration through the loop.

As a more concise alternative, you can use a `for` loop and execute some code for each item in a collection.

```rust
fn main() {
    let a = [10, 20, 30, 40, 50];

    for element in a.iter() {
        println!("the value is: {}", element);
    }
}
```
The safety and conciseness of for loops make them the most commonly used loop construct in Rust. Even in situations in which you want to run some code a certain number of times, as in the countdown example that used a while loop.

Here’s what the countdown would look like using a `for` loop and `rev`, to reverse the range:

```rust
fn main() {
    for number in (1..4).rev() {
        println!("{}!", number);
    }
    println!("LIFT OFF!!!");
}
```
```bash
3!
2!
1!
LIFT OFF!!!
```
