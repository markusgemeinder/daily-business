Notes (2023/12/01 | Coach: CJ)

## React Rules

1. **PascalCase** for custom components
2. Has to have a **'return'**
3. Needs a **root element**

### Variable

- `const name = "Jane";`
- `root.render(<div><p>Hier kommt einfach die Variable ohne $-Zeichen rein >>> Hello {name}</p></div>);`

### VSC Structure

- Wir arbeiten nur noch mit (kleinstmöglichen, sinnvollen) Komponenten und starten mit App.js
  - neues Project: alles löschen, was nicht benötigt wird (z.B. Textbaustein in App.js, andere Komponenten oder Bilder in public)
  - wichtig letzte Zeile: `export default App;`
- Bilder alle in public speichern
- Jede Komponente erhält ein eigenes .js in Ordner src (Bsp. `Greeting.js`)
  - letzte Zeile: `export default Greeting;`
  - neue Zeile oben in App.js: `import Greeting from "./Greeting"`

### Console

- `npx create-react-app my-first-react-app` erstellt React App Project mit dem Namen 'my-first-react-app'
- `cd my-first-react-app`
- `npm i` = `npm install` nach dem Klonen eines neuen Repos, das ein package.json file beinhaltet >>> `node_modules` muss in der .gitignore stehen, `package-lock.json` sollte commited werden
- `code .`
- `npm start` startet den Development Server
- `package.json` sieht wie folgt aus:

```js
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A description of my app",
  "scripts": {
    "test": "npm run …"
  },
  "author": "Alex Newfish",
  "license": "UNLICENSED",
  "dependencies": {
    "my-dependency": "^10.4.1",
    "my-other-dependency": "^2.0.0"
  },
  "devDependencies": {
    "my-dev-dependency": "^8.0.105",
    "my-other-dev-dependency": "^0.1.6"
  }
}
```

## React Basics

### Custom React Component

- Wir schreiben eine Funktion (Custom React Component), z.B. `function Greeting()`
- Function call innerhalb einer anderen Komponente (Common Component) über `<Greeting />`

### Deklarationsunterschiede zwischen JS und JSX

- z.B. `className` statt `class`
- Liste von CJ?

### Grundlagen

- **JEDE Komponente in React ist immer eine Funktion**
- (JSX = JavaScript Extension)
- Vorher (JS): Imperative Programming = ich sage der Maschine, was sie tun soll
- Jetzt (JSX): Deklarative Programming = ich wünsche mir was von der Maschine und die Maschine transformiert
- Compiler ("Babel") übersetzt JSX in JS
- React braucht immer ein Root-Element:
  - `const rootElement = document.querySelector(...);`
  - `const root = createRoot(rootElement);`
  - `root.render(<div><p className="intro">Hier kommt einfach der HTML-Code rein</p></div>);`

### InnerHTML

-InnerHTML in React nicht möglich!

- createElement jetzt über render

```

```
