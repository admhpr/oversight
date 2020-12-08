---
title: singly linked list
date: 2021-12-13T06:52
desc: The world is swarming in lists, to-dos, shopping, sprint backlogs. Linear in nature they help us mere mortals keep track of things and their relationships to each other. Having a re-visit to this fundamental data structure with the help of Rust.
tags:
  - rust
  - data structures
---
The world is swarming in lists, to-dos, shopping, sprint backlogs. Linear in nature they help us mere mortals keep track of things and their relationships to each other. Having a re-visit to this fundamental data structure with the help of Rust.  

## Linked Lists

A [singly linked list](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list) stores entries in sequence pointing to next item in the chain. When there is the no next item the pointer points to some form of nothing, such as `nil/null/None` etc.

```bash
+--------+  +-------+  +-------+  +-------+
| LENGTH |  |       |  |       |  |       |
+--------+  |   1   |  |   2   |  |   3   |
+--------+  |       |  |       |  |       |
| HEAD   +-->       |  |       |  |       |    +-------+
+--------+  +--------->---------->------------>+ NULL  |
| TAIL   |  | NEXT  |  | NEXT  |  | NEXT  |    +-------+
+--------+  +-------+  +-------+  +-------+
         +------------------------------^

```

### Example
A potential use case for a singly linked list would be a [transaction log](https://en.wikipedia.org/wiki/Transaction_log), this an append only list where commands ( such as a SQL statement ) are added to a list before being written to persistent storage. 

### Pros

### Cons 

## Doubly Linked Lists


## Skip Lists