Notes (2023/11/27 | Coach: Julia Löschel)

## JavaScript Array Methods 2

### General

- `button.disabled = true;` am Ende der anonymen Button Event Listener Click-Funktion verhindert,
  dass der Button mehrmals geklickt werden kann

2 arrays:

- studentNames: only names
- students: additional information

Helping functions (utils.js) >>> pickup snippets

### .includes

- `studentNames.includes("...")`
- Iteriert nicht über die Objekte, sondern checkt nur über die Arrays
- Funktioniert nicht mit Callback-Funktion
- Alternative wäre `student.some(...)``

### .find

- `students.find((student) => student.age > 30);`
- Gibt **das (ganze) erste Objekt** zurück, das es findet (immer **nur ein Objekt**)

### .findIndex

- `students.findIndex((student) => student.points === 39);`
- Gibt den **Index des ersten Objekts** zurück, das es findet (**Index immer beginnend bei 0**)

### .sort by number

- checkt per Iteration Eintrag a mit Eintrag b (per Konvention a und b);
- `students.sort((a,b) => a.age - b.age);` Liste wird **absteigend nach Alter** sortiert
- `students.sort((a,b) => b.age - a.age);` Liste wird **aufsteigend nach Alter** sortiert
- nicht zwingend zu merken, MDN Website hilft

### .sort by string

- Liste aufsteigend sortiert (von A oben nach Z unten):

```js
  students.sort((a,b){
    const NameA=a.name.toLowerCase();
  const NameB=b.name.toLowerCase();
  //
  if (nameA < nameB) {
    return -1; // return-Wert positiv, wenn absteigende Sortierung
  }
  if (nameA > nameB) {
    return 1; // return-Wert negativ, wenn absteigende Sortierung
  }
  return 0;
  });
```

- Beachten:
  - Strings werden in Zahlen umgewandelt und als Zahlen miteinander verglichen
  - Deshalb vorher in `.toLowerCase` (oder `.toUpperCase`) umwandeln!
- **Achtung:** .sort mutiert Original-Array dauerhaft, deshalb .slice().sort verwenden!
- MDN Website hilft: [MDN Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### .slice().sort by string

- slice() erstellt Kopie vor dem Sortieren

```js
  students.slice().sort((a,b){
  const NameA=a.name.toLowerCase();
  const NameB=b.name.toLowerCase();
  if (nameA < nameB) {
    return -1; // return-Wert positiv, wenn absteigende Sortierung
  }
  if (nameA > nameB) {
    return 1; // return-Wert negativ, wenn absteigende Sortierung
  }
  return 0;
  });
```

MDN Website hilft: [MDN Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### .some / .every

`students.some((student) => student.points === 0);` Gibt es einen Studenten, der Null Punkte hat? Ausgabewert = true oder false
`students.every((student) => student.age >= 18);` Sind alle Studenten mindestens 18 Jahre? Ausgabewert = true oder false

## Code-Schnipsel

### Functions / Functions inside functions

```js
const myNumbers = [0, -7, 5, 1, 3, -6, 9, 2, -8];
const myOtherNumbers = [0, -17, 5, -12, 3, -26, 9, 2, -8];

function getNegatives(numbers) {
  //   return numbers.filter((number) => number < 0);
  return getLesserThan(numbers, 0); //function inside function
}
console.log(getNegatives(myNumbers));
console.log(getNegatives(myOtherNumbers));
```

```js
function getLesserThan(numbers, numberToCompare) {
  return numbers.filter((number) => number < numberToCompare);
}

console.log(getLesserThan(myOtherNumbers, 0));
console.log(getLesserThan(myNumbers, 0));
```

```js
const otherNumbers = [11, 33, 55];

function doubleNumber(number) {
  return number * 2;
}

const doubles = otherNumbers.map(doubleNumber);
console.log(doubles);
```

#### Anmerkung

- .map will keine Zahl sondern eine Funktion haben, keine Klammern notwendig
- Vergleich von Diego: Waschmaschine = .map, da kommt die Wäsche rein [Funktionsname ohne Klammer und wir drücken den Startknopf [nicht die genaue Funktion, wie die Wäsche zu waschen ist]

```js
const names = ["diego", "joe", "benjamin"];

function getWordLengths(words) {
  // return words.map(getWordLength);
  return words.map((word) => word.length);
}

function getWordLength(word) {
  return word.length;
}

console.log(getWordLengths(names));
```
