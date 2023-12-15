Notes (2023/12/04 | Coach: Diego Caponera)

## React State

### Generals

- Propertiers: props kommen von draußen von App() an SpecialFunction(props)
- Statement: states passieren innerhalb der Function
- We call the useState function (`import { useState } from "react"`) and pass the initial state value as argument, this value is used in our app until something changes
- Calling the useState function gives us two things in return:
  - a variable with the current state as value
  - the set function to set a new state

```js
import { useState } from "react";

function SocialMediaPost() {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [views, setViews] = useState(0);
  // more than one state possible
  const [name, setName] = useState("Edward");

  function handleClick() {
    setName("Taylor");
    setAge((a) => a + 1);
  }

  function toggleLiked() {
    setLiked(!liked);
  }

  return (
    <article>
      <p>Liked: {liked ? "Yes" : "No"}</p>
      <button type="button" onClick={toggleLiked}>
        {liked ? "Remove like" : "Add like"}
      </button>
    </article>
  );
}
```

### Wiederholung {children}

```js
// index.js

const postInfo = {
  author: "Diego",
  title: "Some Stuff!!!",
};

export default function App() {
  const { title, author } = postInfo;
  return (
    <>
      <BlogPost title={title} author={author} />
    </>
  );
}
```

```js
// ./components/BlogPost

export default function BlogPost({ title, author }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{author}<p>
    </p>
  );
}
```

### Beispiel: Count

```js
// index.js

export default function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

function Counter() {
  // let count = 0
  const [count, setCount] = useState(0);
  // count >>> setCount, tom >>> setTom

  console.log('Counter', count);
  function handleClick(){
    // count++;
    setCount(count +1)
  }
  return (
    <div className="counter">
    <span>Count: {count}</span>
    <button onClick={handleClick}>Increment</button>
  )
}
```

### Weiterführendes Beispiel: 2 Counter, one starts at 2, one at 0

```js
// index.js

export default function App() {
  return (
    <div className="app">
      <Counter initial={2}/>
      // <Counter initial={0}/>
      <Counter />

    </div>
  );
}

function Counter({initial = 0}) {

  console.log('Counter', initial)
  const [count, setCount] = useState(initial); //

  console.log('Counter', count);
  function handleClick(){
    // count++;
    setCount(count +1)
  }
  return (
    <div className="counter">
    <span>Count: {count}</span>
    <button onClick={handleClick}>Increment</button>
  )
}
```
