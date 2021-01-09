---
title: ownership in rust
date: 2021-01-03T08:11
desc: A look at basic building blocks of rust
tags:
  - rust
---

Rust’s central feature is ownership. Although the feature is straightforward to explain, it has deep implications for the rest of the language.

All programs have to manage the way they use a computer’s memory while running. Some languages have garbage collection that constantly looks for no longer used memory as the program runs; in other languages, the programmer must explicitly allocate and free the memory. Rust uses a third approach: memory is managed through a system of ownership with a set of rules that the compiler checks at compile time. None of the ownership features slow down your program while it’s running.

### The Stack and the Heap

In many programming languages, you don’t have to think about the stack and the heap very often. But in a systems programming language like Rust, whether a value is on the stack or the heap has more of an effect on how the language behaves and why you have to make certain decisions.

Both the stack and the heap are parts of memory that are available to your code to use at runtime, but they are structured in different ways. The stack stores values in the order it gets them and removes the values in the opposite order. This is referred to as __last in__, __first out__.

All data stored on the stack must have a known, fixed size. Data with an unknown size at compile time or a size that might change must be stored on the heap instead. The heap is less organized: when you put data on the heap, you request a certain amount of space. The memory allocator finds an empty spot in the heap that is big enough, marks it as being in use, and returns a pointer, which is the address of that location.

Keeping track of what parts of code are using what data on the heap, minimizing the amount of duplicate data on the heap, and cleaning up unused data on the heap so you don’t run out of space are all problems that ownership addresses.

### Ownership Rules

Here are the three rules of ownership in Rust:

* Each value in Rust has a variable that's called its owner.
* There can only be one owner at a time.
* When the owner goes out of scope, the value will be dropped.

### Variable Scope

As a first example of ownership, we’ll look at the scope of some variables. A scope is the range within a program for which an item is valid. Let’s say we have a variable that looks like this:

```rust
let s = "hello";
```
The variable `s` refers to a string literal, where the value of the string is hardcoded into the text of our program. The variable is valid from the point at which it’s declared until the end of the current scope. 

```rust
    {                      // s is not valid here, it’s not yet declared
        let s = "hello";   // s is valid from this point forward

        // do stuff with s
    }                      // this scope is now over, and s is no longer valid
```
In other words, there are two important points in time here:

* When `s` come into scope and is therefore valid.
* It remains valid until it goes out of scope.

At this point, the relationship between scopes and when variables are valid is similar to that in other programming languages. Now we’ll build on top of this understanding by introducing the `String` type.

The types covered [previously](../rust-data-types.md) are all stored on the stack and popped off the stack when their scope is over, but we want to look at data that is stored on the heap and explore how Rust knows when to clean up that data.

String literals are immutable which may not be suitable for every situation. Also, not every string value can be known at author time (think user input). For these scenarios Rust has a second string type, `String`. This type is allocated on the heap and as such is able to store an amount of text that is unknown to us at compile time. You can create a `String` from a string literal using the `from` function, like so:

```rust
let s = String::from("hello");
```

This kind of string can be mutated:

```rust
let mut s = String::from("hello");
s.push_str(", world!"); // push_str() appends a literal to a String
println!("{}", s); // This will print `hello, world!`
```
So, what’s the difference here? Why can `String` be mutated but literals cannot? The difference is how these two types deal with memory.

### Memory and Allocation

In the case of a string literal, we know the contents at compile time, so the text is hardcoded directly into the final executable. This is why string literals are fast and efficient. But these properties only come from the string literal’s immutability. Unfortunately, we can’t put a blob of memory into the binary for each piece of text whose size is unknown at compile time and whose size might change while running the program.

With the `String` type, in order to support a mutable, growable piece of text, we need to allocate an amount of memory on the heap, unknown at compile time, to hold the contents. This means:

* The memory must be requested from the memory allocator at runtime.
* We need a way of returning this memory to the allocator when we’re done with our String.

That first part is done by us: when we call `String::from`, its implementation requests the memory it needs. This is pretty much universal in programming languages.

However, the second part is different. In languages with a __garbage collector__ (GC), the GC keeps track and cleans up memory that isn’t being used anymore, and we don’t need to think about it. 

Without a GC, it’s our responsibility to identify when memory is no longer being used and call code to explicitly return it,just as we did to request it. Doing this correctly has historically been a difficult programming problem. If we forget,we’ll waste memory. If we do it too early, we’ll have an invalid variable. If we do it twice, that’s a bug too. We need to pair exactly one `allocate` with exactly one `free`.

Rust takes a different path: the memory is automatically returned once the variable that owns it goes out of scope.

```rust
    {
        let s = String::from("hello"); // s is valid from this point forward

        // do stuff with s
    }                                  // this scope is now over, and s is no
                                       // longer valid
```
There is a natural point at which we can return the memory our String needs to the allocator: when `s` goes out of scope.
Rust calls a special function called `drop` when a variable goes out of scope. This style similar to [Resource Acquisition Is Initialization](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization) in C++,has a huge impact on the way Rust code is authored.

### Ways Variables and Data Interact: Move

Multiple variables can interact with the same data in different ways in Rust.

```rust
let x = 5;
let y = x;
```
We can probably guess what this is doing: bind the value `5` to `x`; then make a copy of the value in `x` and bind it to `y`.We now have two variables, `x` and `y`, and both equal `5`. This is indeed what is happening, because integers are simple values with a known, fixed size, and these two `5` values are pushed onto the stack.

```rust
    let s1 = String::from("hello");
    let s2 = s1;
```
The above code on the surface looks very similar to the previous example. It would be easy to assume that the way it works would be the same: that is, the second line would make a copy of the value in `s1` and bind it to `s2`. But this isn’t quite what happens.

 A `String` is made up of three parts, shown on the left: a `pointer` to the memory that holds the contents of the string, a `length`, and a `capacity`. This group of data is stored on the stack. On the right is the memory on the heap that holds the contents.

The length is how much memory, in bytes, the contents of the `String` is currently using. The capacity is the total amount of memory, in bytes, that the String has received from the allocator. The difference between length and capacity matters, but not in this context, so for now, it’s fine to ignore the capacity.

When we assign `s1` to `s2`, the String data is copied, meaning we copy the pointer, the length, and the capacity that are on the stack. We do not copy the data on the heap that the pointer refers to.

Rust does not copy the data, it would be extremely expensive in terms of runtime performance if the data on the heap grows unchecked.

Rust automatically calls the `drop` function and cleans up the heap memory for that variable. So what would happen if there was a two pointers to the same place in memory. When both the variables goes out of scope the same place in memory will tried to be freed up. This is a problem: when `s2` and `s1` go out of scope, they will both try to free the same memory. This is known as a double free error and is one of the memory safety bugs we mentioned previously. Freeing memory twice can lead to memory corruption, which can potentially lead to security vulnerabilities.

To ensure memory safety, there’s one more detail to what happens in this situation in Rust. Instead of trying to copy the allocated memory, Rust considers s1 to no longer be valid and, therefore, Rust doesn’t need to free anything when s1 goes out of scope. Check out what happens when you try to use `s1` after `s2` is created; it won’t work:

```rust
    let s1 = String::from("hello");
    let s2 = s1;

    println!("{}, world!", s1);
```
You’ll get an error like this because Rust prevents you from using the invalidated reference:

```bash
$ cargo run
   Compiling ownership v0.1.0 (file:///projects/ownership)
error[E0382]: borrow of moved value: `s1`
 --> src/main.rs:5:28
  |
2 |     let s1 = String::from("hello");
  |         -- move occurs because `s1` has type `std::string::String`, which does not implement the `Copy` trait
3 |     let s2 = s1;
  |              -- value moved here
4 | 
5 |     println!("{}, world!", s1);
  |                            ^^ value borrowed here after move

error: aborting due to previous error

For more information about this error, try `rustc --explain E0382`.
error: could not compile `ownership`.

To learn more, run the command again with --verbose.
```
If you’ve heard the terms (shallow copy)[https://en.wikipedia.org/wiki/Object_copying#Shallow_copy] and (deep copy)[https://en.wikipedia.org/wiki/Object_copying#Deep_copy] while working with other languages, the concept of copying the pointer, length, and capacity without copying the data probably sounds like making a shallow copy. But because Rust also invalidates the first variable, instead of being called a shallow copy, it’s known as a move. 

There’s a design choice that’s implied by this: Rust will never automatically create “deep” copies of your data. Therefore, any automatic copying can be assumed to be inexpensive in terms of runtime performance.


### Ways Variables and Data Interact: Clone

When a deep copy is necessary and the data is required on the heap not just the stack, there is a method called `clone`.

```rust
let s1 = String::from("hello");
    let s2 = s1.clone();

    println!("s1 = {}, s2 = {}", s1, s2);
```

When you see a call to clone, you know that some arbitrary code is being executed and that code may be expensive. It’s a visual indicator that something different is going on.

### Stack-Only Data: Copy

```rust
 let x = 5;
    let y = x;

    println!("x = {}, y = {}", x, y);
```
Integers that have a known size at compile time are stored entirely on the stack, so copies of the actual values are quick to make. That means there’s no reason we would want to prevent x from being valid after we create the variable y. In other words, there’s no difference between deep and shallow copying here, so calling clone wouldn’t do anything different from the usual shallow copying and we can leave it out.
