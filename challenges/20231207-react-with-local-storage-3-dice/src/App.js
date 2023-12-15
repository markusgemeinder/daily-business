// import { D6Button } from "./components/D6Button";
// import History from "./components/History";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="app">
//       <main className="app__main">
//         <D6Button />
//       </main>
//       <aside className="app__aside">
//         <History rolls={[]} />
//       </aside>
//     </div>
//   );
// }

// ===> App.js

import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  // const [rolls, setRolls] = useState([]);
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: 0 });

  return (
    <div className="app">
      <main className="app__main">
        <D6Button rolls={rolls} setRolls={setRolls} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

// 1. a) State von child zu parent Funktion übertragen (Komponente an App)
// 1. b) Child fixieren: Beide Variablen aus dem State an child übergeben bzw. in child importieren
//       D6Button ({ rolls, setRolls })
// 1. c) Parent updaten: Funktionsaufruf erweitern um die beiden Variablen, die als props an child übergeben werden
//       <D6Button rolls={rolls} setRolls={setRolls}/>
// 2. <History rolls={rolls} /> anstatt <History rolls={[]} />
