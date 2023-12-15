Notes (2023/12/04 | Coach: CJ)

## React Nesting

### Fragments ('diamonds')

- `<>`und `</>` sind sog. diamonds, die keine Auswirkung auf HTML haben (keine Semantik) und nur zur Fragmentierung dienen, damit es als ein einziger Return-Wert zurückgegeben wird.
- exakt gleichbedeutend mit `<Fragment>` und `</Fragment>` (keine Klassenzuweisung möglich, nur `key =""`)

```js
function Animal({emoji, name, description}){
  return(
    <>
      <h2>
        {emoji, name}
      <h2>
      {description}
    </>
  );
}
```

### Children

- {children} ist (props) default, muss aber als Variable explizit erwähnt werden, damit die Übergabe/Übernahme funktioniert
- Oder andersherum: Sobald {children} verwendet werden sollen ist der Tag in function Animal nicht mehr self-closing (`<Button>`... children-Inhalt ...`</Button>``)

```js
function Button({children}){
  return(
    <button type="button" className="button>
      {children}
    </button>
  );
}
```

```js

// function including button

function Animal({emoji, name, description}){
  return(
    <>
      <h2>
        {emoji, name}
      <h2>
      {description}
      <Button>
        Adopt <strong>{name}</strong> // === {children}
      </Button>
  );
}
```

### Default function export

- entweder: `export default function NameOfFunction(){}` (inline)
- oder: `export default NameOfFunction` (unten, ganz am Komponentenende)

### Component subfolders

- Komponenten sollten in sich geschlossen sein ('separation of concerns' und 'separation of files') und ihren eigenen Ordner bekommen
- Konvention Bsp. Ordner `../components/Animal` und darin nur eine einzige `index.js` (nicht `Animal.js`!)
- Import in Main-index.js über `import {Animal} from "../components/Animal` >>> sobald die Datei index.js statt Animal.js heißt, reicht der Ordner-Name
