---
title: 'The Composite Pattern'
date: '19-02-2019 21:03'
taxonomy:
    category:
        - blog
    tag:
        - 'design patterns'
        - structural
twitterenable: true
twittercardoptions: summary
articleenabled: false
musiceventenabled: false
orgaenabled: false
orga:
    ratingValue: 2.5
orgaratingenabled: false
eventenabled: false
personenabled: false
musicalbumenabled: false
productenabled: false
product:
    ratingValue: 2.5
restaurantenabled: false
restaurant:
    acceptsReservations: 'yes'
    priceRange: $
facebookenable: true
---

## Name: Composite

## Type: Structural

## Use when you want to:

Selectively treat a group of objects that are part of a hierarchy as "the same" when they are in fact different. 

From Wikipedia:

> In software engineering, the composite pattern is a partitioning design pattern. The composite pattern describes that a group of objects is to be treated in the same way as a single instance of an object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly

Real World Example:

> Every organisation is composed of employees. Each of the employees has the same features i.e. has a salary, has some responsibilities, may or may not report to someone, may or may not have some subordinates etc.

Main Purpose:

> The composite pattern lets clients treat the individual objects in a uniform manner.

Typescript Code Example:

Say we had the following types of employees:

```
interface IEmployee{
    getName(): string;
    setSalary(salary: number);
    getSalary(): number;
    getRoles(): string[];
}

class Developer implements IEmployee{
    protected roles;
    
    constructor(protected name: string, protected salary:number){
    }

    public getName(): string{
        return this.name;
    }

    setSalary(salary: number){
        this.salary = salary;
    }

    getSalary(): number{
        return this.salary;
    }

    public getRoles(): string[]{
        return this.roles;
    }
}

class Designer implements IEmployee{
    protected roles;
    
    constructor(protected name: string, protected salary:number){
    }

    public getName(): string{
        return this.name;
    }

    setSalary(salary: number){
        this.salary = salary;
    }

    getSalary(): number{
        return this.salary;
    }

    public getRoles(): string[]{
        return this.roles;
    }
}
```

In the following organisation:

```
class Organisation{
    protected employees : IEmployee[] = [];

    public addEmployee(employee: IEmployee){
        this.employees = this.employees.concat(employee);
    }

    public getNetSalaries(): number{
        let netSalary = 0;

        for(let employee of this.employees) {
            netSalary += employee.getSalary();
        }

        return netSalary;
    }
}
```

We could use it as follows:

```
// Prepare the employees
const john = new Developer('John Doe', 12000);
const jane = new Designer('Jane Doe', 15000);

// Add them to organization
const organisation = new Organisation();
organisation.addEmployee(john);
organisation.addEmployee(jane);
console.log(`Net salaries: ${organisation.getNetSalaries()}`) // Net Salaries: 27000
```


<script async src="//jsfiddle.net/harps116/1v2t7kw6/5/embed/js,result/"></script>