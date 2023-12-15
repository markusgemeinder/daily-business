# The Dummy Example explained

Passing functions as props is one of the hardest moments in the React learning experience. The secret is to practice _the same_ activity multiple times, until we understand everything that goes on.

In this activity we will pay attention to:

- the logs in the click handlers (they happen when **the user** clicks);
- the logs in the component function bodies (they happen when **React re-renders** the components).

[A final working example can be found here](https://stackblitz.com/edit/vitejs-vite-hsm3xr?file=src%2FApp.jsx,src%2FApp.css).

## Starting with the dummy components

We have two components for now, a parent `<App>` and a `<Dummy>`, that accepts a `value` prop and renders that on screen. It's important to have two `<Dummy>` children (not literally!), to have the selection problem.

```jsx
export default function App() {
  return (
    <div className="app">
      <Dummy value="A"/>
      <Dummy value="B"/>
    </div>
  );
}

function Dummy({ value }) {
  return (
    <div className="box">
      <span>{value}</span>
      <button>Select</button>
    </div>
  );
}
```

Our goal is now to depict a specific `<Dummy>` as selected on screen. Let's define a CSS rule for that:

```css
.selected {
  background-color: orange;
}
```

Now if we write `<div className="box selected">` in the component, both dummies will look orange. It's a first step! Let's remove the additional class, and control this behaviour via a `selected` prop:

```jsx
export default function App() {
  return (
    <div className="app">
      <Dummy value="A" selected={true}/>
      <Dummy value="B"/>
    </div>
  );
}

function Dummy({ value, selected }) {
  return (
    <div className={selected ? 'box selected' : 'box'}>
      <span>{value}</span>
      <button>Select</button>
    </div>
  );
}
```

Now just dummy A will be selected! Remember how the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) works:

```js
    selected ? 'box selected' : 'box'
//  ^condition      ^             ^
//                  \ if true     |
//                                \ if false  
```

Now we can proceed in two ways: either **introduce the state** in `<App>` first, or add the click handler. Let's do state first.

## Making the App stateful

Everything that might change on screen in a React context, must be defined in a state. This is the mechanism React has to know when to call the component functions again, without losing memory of the previous state.

```jsx
import { useState } from 'react';

export default function App() {
  const [selectedID, setSelectedID] = useState(1);
  return (
    <div className="app">
      <Dummy value="A" id={1} selected={selectedID === 1}/>
      <Dummy value="B" id={2} selected={selectedID === 2}/>
    </div>
  );
}

function Dummy({ id, value, selected }) {
  console.log('Dummy', id, selected);
  return (
    <div className={selected ? 'box selected' : 'box'}>
      <span>{value}</span>
      <button>Select</button>
    </div>
  );
}
```

- we introduced a `selectedID` state, that starts at `1`;
- we added an `id` prop to the `Dummy`. The value could have sufficed for this example, but since we'll deal often with an explicit `id` prop coming from network requests / database records, it's good to start thinking this way;
- now the passed `selected` prop is not and hardcoded `true`/`false` value, but the result of the comparison between the dummy id and the current `selectedID` value.

See how the logs say:

```
Dummy 1 true
Dummy 2 false
```

As expected, the first child is selected because its `id` has the same value of `selectedID` (1 and 1).

Change the state line to:

```js
const [selectedID, setSelectedID] = useState(2);
```

And see how dummy B is selected. If we find a way to update `selectedID` depending on which button we clicked on, we are done!

## Talking back to the parent from a child component

This is a fundamental React pattern, or better a fundamental programming pattern: the idea that functions can be passed as arguments, and called at appropriate time. We are already used to that!

```js
const button = document.querySelector('.my-button');

function onClick(event) {
  console.log('onClick');
  event.target.classList.toggled('clicked');
}

button.addEventListener('click', onClick);
```

The `onClick` function is called when the user clicks on the button. We just adapt the concept to React props:

```jsx
import { useState } from 'react';

export default function App() {
  const [selectedID, setSelectedID] = useState(null); // let's start with no selection now

  function handleSelect() {
    console.log('App:handleSelect');
  }

  return (
    <div className="app">
      <Dummy value="A" id={1} selected={selectedID === 1} onSelect={handleSelect}/>
      <Dummy value="B" id={2} selected={selectedID === 2} onSelect={handleSelect}/>
    </div>
  );
}

function Dummy({ id, value, selected, onSelect }) {

  function handleClick() {
    console.log('Dummy:onClick', id);
    onSelect();
  }

  return (
    <div className={selected ? 'box selected' : 'box'}>
      <span>{value}</span>
      <button onClick={handleClick}>Select</button>
    </div>
  );
}
```

- we declare an `handleSelect` function in the `App`;
- we declared a new `onSelect` prop for the `Dummy` component;
- we pass `handleSelect` as value for `onSelect` (pretty much like we passed `A` and `B` as `value`!);
- we added an `handle` internal function inside the dummy (we'll see in a moment why);
- we pass it as `onClick` to the `<button>`;
- we call `onSelect` from within `handleClick`.

Focus on the logs when you click for now, e.g.:

```
Dummy:onClick 2
App:handleSelect

Dummy:onClick 1
App:handleSelect
```

### Naming conventions comments

It's easy to get confused with all the handle/on things, let's stop here for a second:

- `handleSelect`: can be called like you want - try to rename it around and see it yourself;
- `<Dummy onSelect={handleSelect}/>`: here `onSelect` should be what we defined in the function signature - `function Dummy({ onSelect, ... }) { ... }`. If we need to rename it, we must do it **in both sides**;
- `handleClick`: likewise, total freedom (but `handle<EventName>` is a good convention);
- `<button onClick={handleClick}>Select</button>`: `onClick` is fixed and comes from React, the value we pass to it is the name of our handler.

### Back to the main problem

Again the click logs:

```
Dummy:onClick 2
App:handleSelect

Dummy:onClick 1
App:handleSelect
```

Ah, if only there was a way to read `App:handleSelect 1/2`...oh wait!

```jsx
export default function App() {
  function handleSelect(id) {
    console.log('App:handleSelect' id);
  }
  ...
}

function Dummy({ id, onSelect, ... }) {
  function handleClick() {
    console.log('Dummy:onClick', id);
    onSelect(id);
  }
  ...
}
```

Basic JS considerations still work: **pass the `id` as an argument**!

```jsx
import { useState } from 'react';

export default function App() {
  const [selectedID, setSelectedID] = useState(null);

  function handleSelect(id) {
    console.log('App:handleSelect');
    setSelectedID(id);
  }

  console.log('App', selectedID);

  return (
    <div className="app">
      <Dummy value="A" id={1} selected={selectedID === 1} onSelect={handleSelect}/>
      <Dummy value="B" id={2} selected={selectedID === 2} onSelect={handleSelect}/>
    </div>
  );
}

function Dummy({ id, value, selected, onSelect }) {

  function handleClick() {
    console.log('Dummy:onClick', id);
    onSelect(id);
  }

  console.log('Dummy', id, selected);

  return (
    <div className={selected ? 'box selected' : 'box'}>
      <span>{value}</span>
      <button onClick={handleClick}>Select</button>
    </div>
  );
}
```

## Final considerations

This is a comprehensive activity that covers controlled components. It's not easy and it take time to master it.
It brings great benefit to reproduce this example **multiple** times, until one can explain it confidently.

After that, you are ready to invite Arrays to the party, and cover all possible scenarios!

Good work ^^