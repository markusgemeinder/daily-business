Notes (2023/11/22)

## JS createElement

### Allgemein

- Dynamische Erstellung von Elementen (z.B. aus Input-Feld Wert in Liste übertragen)
- DOM = Document Object Model (vgl. Schaubild "Aufbau des gesamten Objekts mit Elementen und Abhängigkeiten")
- Warum Arbeiten mit _Identifikator "data-js ="_ (custom attribute, könnte auch "brokkoli" sein) für JavaScript statt mit Klassen oder ID? >>> separation of concern
- Exkurs CSS: hier mit _Klassen "class ="_ identifizieren (z.B. ".headline" besser als "h1")

### Event Listener ruft Event auf

1. Übergabevariable definieren:
   - `const form = document.querySelector('[data-js="form"]');`
   - `const textInput = document.querySelector('[data-js="input"]');`
   - `const textOutput = document.querySelector('[data-js="output"]');`
2. `form.addEventListener("submit", () => {});` ist eine anonyme Arrow-Funktion in der Funktion

   - Exkurs: `function beispiel(){}` und `form.addEventListener("submit", beispiel);` ist eine benamte Funktion in der Funktion, functions werden immer geladen - egal, wo sie im Dokument stehen
   - Standardverhalten in der Funktion ausschalten: `event.preventDefault();`
   - Variante 1 - Formular auslesen:
     - `// const formData = new FormData(event.target);`
     - `// const data = Object.fromEntries(formData);`
     - `// console.log(data.FELDNAME);`
   - Variante 2 - Werte auslesen:
     - Wert auslesen: `// const valFeldname = event.target.elements.FELDNAME.value;`
     - Checkbox auslesen: `// const checkStatus = event.target.elements.FELDNAME.checked;`
   - Variante 3 - Elemente hinzufügen:

     - `const VARIABLE = document.createElement("li")`
     - (Exkurs: `console.log([VARIABLE]);` >>> zeigt im Inspector unter Console alle Möglichkeiten, Variable in Array packen)
     - (Exkurs: `VARIABLE.innerHTML = "<h2 class='KLASSENNAME'>" + textInput.value + "<h2>"` >>> nicht machen)
     - `VARIABLE.textContent = textInput.value;`
     - `VARIABLE.classList.add("KLASSENNAME");`
     - `cardContainer.prepend(KLASSENNAME);` >>> packe das Element vor alle Elemente
     - `cardContainer.append(KLASSENNAME);` >>> packe das Element hinter alle Elemente

   - Funktion checken immer als nächsten Step mitschleppen: `console.log("irgendwas")`
