### Notes 2023/11/21

## JavaScript in HTML forms

### Allgemein

- Standardverhalten von `<form>` aushebeln (?-String verhindern) =
- Aufgabenstellung: Bei Klick Daten abfangen und in Variable (Objekt) speichern

### Objekt erstellen (Formular auslesen)

```js
  const form = document.querySelector('[data-js="form"]');
  form.addEventListener("submit"), (event) => {
    event.preventDefault(); // Hebelt Standardverhalten aus
      // Submitter hat ein Event getriggert, Klick auf Button hat ein Event generiert
      // Event Submitter: Button
      // Event Target: Form
  console.log(event.target.elements.firstname.value); // gibt einzelnen Wert zurück
  const formData = new FormData(event.target); // new FormData() erstellt eine neue (ellenlange) Liste, mit vielen leeren Feldern und nicht benötigten Daten
  // const eventTarget = event.target >>> über Variante vereinfachen//
  const data = Object.fromEntries(formData); // macht aus Liste ein benutzbares Objekt ausschließlich mit gefüllten und benötigten Feldern
  console.log(new FormData());
  console.log(formData);
  console.log(data); // an dieser Stelle (bei data) können die Daten modelliert werden, z.B. Felder rausgenommen oder hinzugefügt werden (z.B. lösche "Name", füge "ID" hinzu etc.)

  event.target.reset(); // Formular wird geleert
  event.target.elements.firstName.focus(); // Fokus aufs Element firstName, Anwendungszweck: z.B. 1. Accessability >>> Maus muss nicht mehr aufs Feld bewegt werden, Cursor ist direkt im Feld; 2. schnelles Ausfüllen von Formularen nacheinander
  });
```

### Zeichenzähler (Formular auslesen)

```js
const form = document.querySelector('[data-js="form"]')

form.addEventListener('submit'),
  (event) => {
    const messageInput = document.querySelector(
      '[data-js="remaining-characters"]'
    )
    const charLeft = document.querySelector('[data-js="remaining-characters"]')
    messageInput.addEventListener('input', (event) => {
      ;(charLeft.textContenct = 150 - event), target.value.length
    })
  }
```

"Events bubble to the top!" (Antwort auf die Frage, warum das Event auf den Submit-Button reagiert)
