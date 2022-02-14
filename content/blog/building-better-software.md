---
title: Building better software
date: 2022-02-05T07:02
desc: Ideas on building software 🏗️
tags:
  - recipes
  - meta
---

### Manage complexity

>  The biggest problem in the development and maintenance of large-scale software systems is complexity — large systems are hard to understand.


The threads of complexity...

> The major contributor to this complexity in many systems is the handling of state and the burden that this adds when trying to analyse and reason about the system. Other closely related contributors are code volume, and explicit concern with the flow of control through the system.

[Out of the Tarpit - Ben Mosely, Peter Marks](http://curtclifton.net/papers/MoseleyMarks06a.pdf)

#### Balance and harmony

A key idea is ensure that state, flow of control, and code volume are in balance and harmony. What is the application modelling (state), how does the application interact with that model (flow of control) and how much logic is needed to achieve the desired outcome (code volume).

Any application with a shared mutable state can be difficult to test or share code across multiple components.

#### Micro complexity

Micro complexity is addressed at the component level. In order for component code to be testable, it should avoid hidden state and adhere to the single responsibility principle. The first step to fixing issues with hidden state is utilizing dependency injection.

Ask yourself...

> Can I know the result of this at all times?

> Can I reuse this code?

> Can I test this code?

It is impossible to write good tests for bad code, you can write hacky tests...perhaps. Commit to writing testable code. 

How?...

* Reduce hidden state
* Do not voilate the single responsibility principle
* Avoid nested logic 

#### Meso complexity

Meso complexity is addressed at the inter component level.

How to work across components...

* Modelling state as nouns
* Defining methods as verbs <select,create,update,delete,combine,compute>__ing__
* Handling conditions
* Iterating over collections


#### The importance of types

* Easier to communicate intention of code
* Better IDE introspection
* Type composition
* Future JS today

#### Immutible operations on state

```typescript
function addEntity(collection, entity){
  return [...collection, entity];
}
function updateEntity(collection, entity){
  return collection.map(e => e.id === entity.id ? Object.assign({}, entity) : e);
}
function deleteEntity(collection, entity){
  return collection.filter(e => e.id !== entity.id);
}
```

#### Creating a store:

* Define state
* Use reducers
* Higher order functions
* Immutability

```typescript
interface BaseEntity {
    id: string | null;
}

interface Action {
    type: string;
    payload?: any;
}

interface Client extends BaseEntity {
    firstName: string;
    lastName: string;
    company: string;
}

const peter: Client = {
    id: '1',
    firstName: 'Peter',
    lastName: 'Porker',
    company: 'Acme, Inc',
};

const john: Client = {
    id: '2',
    firstName: 'John',
    lastName: 'Doe',
    company: 'NA',
};

const clients: Client[] = [peter, john];

interface ClientsState {
    clients: Client[];
    currentClient: Client;
}

const newClient: Client = {
    id: null,
    firstName: '',
    lastName: '',
    company: '',
};

const initialClientsState: ClientsState = {
    clients,
    currentClient: newClient,
};

const CLIENT_LOAD = '[Client] Load';
const CLIENT_CREATE = '[Client] Create';
const CLIENT_UPDATE = '[Client] Update';
const CLIENT_DELETE = '[Client] Delete';
const CLIENT_SELECT = '[Client] Select';
const CLIENT_CLEAR = '[Client] Clear';

function loadClients(state, clients): ClientsState {
    return {
        clients,
        currentClient: state.currentClient
    }
};

function selectClient(state, client): ClientsState {
    return {
        clients: state.clients,
        currentClient: client
    }
};

function clearClient(state): ClientsState {
    return {
        clients: state.clients,
        currentClient: null
    }
};

function createClient(state, client): ClientsState {
    return {
        clients: [...state.clients, client],
        currentClient: state.currentClient
    }
};

function updateClient(state, client): ClientsState {
    return {
        clients: state.clients.map(c => {
            return (c.id === client.id) ? Object.assign({}, client) : c;
        }),
        currentClient: state.currentClient
    }
};

function deleteClient(state, client): ClientsState {
    return {
        clients: state.clients.filter(c => c.id !== client.id),
        currentClient: state.currentClient
    }
};

function clientsReducer(
    state: ClientsState = initialClientsState,
    action: Action
) {
    switch (action.type) {
        case CLIENT_LOAD:
            return loadClients(state, action.payload);
        case CLIENT_SELECT:
            return selectClient(state, action.payload);
        case CLIENT_CLEAR:
            return clearClient(state);
        case CLIENT_CREATE:
            return createClient(state, action.payload);
        case CLIENT_UPDATE:
            return updateClient(state, action.payload);
        case CLIENT_DELETE:
            return deleteClient(state, action.payload);
        default:
            return state;
    }
};

class ClientsStore {
    reducer;
    state: ClientsState;

    constructor(state: ClientsState, reducer) {
        this.state = state;
        this.reducer = reducer;
    }

    getState() {
        return this.state;
    }

    select(key: string) {
        return this.state[key];
    }

    dispatch(action: Action) {
        this.state = this.reducer(this.state, action);
    }
}

const jane: Client = {
    id: '123',
    firstName: 'Jane',
    lastName: 'Doe',
    company: 'Anon'
}

const clientsStore = new ClientsStore(initialClientsState, clientsReducer);
const aClient = clientsStore.select('currentClient');
clientsStore.dispatch({ type: CLIENT_CREATE, payload: jane });
const allClients = clientsStore.select('clients');

interface AppState {
    clientsState: ClientsState;
}

const appState: AppState = {
    clientsState: initialClientsState,
};
```

#### Macro complexity

Macro complexity is addressed at the application or applications level.

#### Time and asynchronous programming

Dealing with time, the fifth element of programming.
