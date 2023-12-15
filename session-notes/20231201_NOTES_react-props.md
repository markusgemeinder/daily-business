Notes (2023/12/01 | Coach: Jessica Lörs)

## React Properties

### Grundgerüst

```js
export default function App() {
  return (
    <div>
      <Pet sound="meow" name="cat" emoji="🐈‍⬛" />
      <Pet sound="woof" name="dog" emoji="🐩" />
      <Pet sound="squeek" name="mouse" emoji="🐭" isHungry={true} />
      // ! only for strings no curly brackets needed
    </div>
  );
}
```

Object destructuring syntax:

```js
function Pet({ sound, name, emoji, isHungry }) {
  return (
    <div>
      {sound}
      <span role="img" aria-label={name}>
        // ! label images (svg, emojis) with role and aria-label
        {emoji}
      </span>
      is Hungry: {typeof isHungry}
    </div>
  );
}

// Original syntax without destructuring:

// function Pet(props) {
//   return (
//     <div>
//       {props.sound}
//       <span role="img" aria-label={props.name}>
//         {props.emoji}
//       </span>
//       is Hungry: {typeof props.isHungry}
//     </div>
//   );
// }
```

### Zusatzfunktion: Button-Click

Beispiel: Button soll etwas ausführen...

```js
function handlePet(happiness) {
  // Konvention: "handle" + Name der Originalfunktion
  if (happiness) {
    return console.log("I'm happy!");
  } else {
    return console.log("I'm unhappy!");
  }
}
```

```js
export default function App() {
  return (
    <div>
      <Pet
        sound="meow"
        name="cat"
        emoji="🐈‍⬛"
        onClick={handlePet}
        isHappy={false}
      />
      <Pet
        sound="woof"
        name="dog"
        emoji="🐩"
        onClick={handlePet}
        isHappy={true}
      />
      <Pet
        sound="squeek"
        name="mouse"
        emoji="🐭"
        onClick={handlePet}
        isHappy={false}
      />
    </div>
  );
}
```

```js
function Pet({ sound, name, emoji, onClick, isHappy }) {
  return (
    <div>
      {sound}
      <span role="img" aria-label={name}>
        // ! label images (svg, emojis) with role and aria-label
        {emoji}
      </span>
      // <button onClick={onClick}></button>
      // ... wenn onClick ohne zusätzliche Argumente ausgeführt werden soll
      {isHappy ? "🥳" : "😩"}
      <button onClick={() => onPet(isHappy)}>Adopt me!</button>
    </div>
  );
}
```
