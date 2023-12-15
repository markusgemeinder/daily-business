Notes (2023/11/24 | Coach: Julia Löschel)

## JavaScript Structure

- Struktur schafft Lesbarkeit
- .js-Unterordner `../utils` erstellen und darin die einzelnen Helferfunktionen abspeichern
- Modularer Aufbau: immer nur das exportieren, was man braucht (ggf. Konstanten und Funktionen extra)
- Komponenten werden mit großem Anfangsbuchstaben geschrieben (Namenskonvention!)

### Named exports

#### Konstanten exportieren / importieren

- Ausgabevariable `export const authors = [{...},{...},{...})` (Quelle z.B. "./utils/authors.js")
- Importdatei `import { authors } from "./utils/authors.js` (Ziel z.B. "index.js")

#### Funktionen exportieren/ importieren

- Ausgabevariable `export function() {...}` (Quelle z.B. "./utils/helper.js")
- Importdatei `import { function } from "./utils/helper.js` (Ziel z.B. "index.js")

### Wichtig: index.html anpassen!

```html
<script src="./index.js" type="module"></script>
<!-- type="module" beinhaltet defer, muss nicht mehr extra genannt werden-->
```

### Vorgehensweise

- "Aus großer langer index.js wird eine schlanke Datei"
- Funktion erstellen (großer Anfangsbuchstabe) = Auslagerungskomponente
- Returnelement erstellen am Ende der Funktion `return card;` >>> aus der Funktion in global scope bringen

```js
const card = Card()
root.append(card)
```
