---
title: SOLID typescript
date: 2022-01-25T06:02
desc: SOLIDifying TypeScript 💪
tags:
  - recipes
  - typescript
---

### SOLID, an oldie but a goodie

#### Single Responsibility Principle (SRP)

> "There should never be more than one reason for a class to change". 

As much as you want to add everything and the kitchen sink to a class, don't, it may be "easier" now, but it certainly won't be later. Having many reasons to change a group of functionality reduces [cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science)). Minimizing the amount of time you need to change a class is important. It's important because if too much functionality is in one class and you modify a piece of it, it can be difficult to understand how that will affect other dependent modules in your codebase.

Bad:

```typescript
class UserSettings {
  constructor(private readonly user: User) {
  }

  changeSettings(settings: UserSettings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}
```

Good:

```typescript
class UserAuth {
  constructor(private readonly user: User) {
  }

  verifyCredentials() {
    // ...
  }
}


class UserSettings {
  private readonly auth: UserAuth;

  constructor(private readonly user: User) {
    this.auth = new UserAuth(user);
  }

  changeSettings(settings: UserSettings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```
