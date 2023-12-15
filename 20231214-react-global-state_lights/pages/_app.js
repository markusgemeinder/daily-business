// import GlobalStyle from "../styles";
// import Layout from "../components/Layout";

// export default function App({ Component, pageProps }) {
//   return (
//     <Layout>
//       <GlobalStyle />
//       <Component {...pageProps} />
//     </Layout>
//   );
// }
// =========================== ORIGINAL CODE ABOVE

import { useState } from "react";

import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  // with uplifting the stage (abstraction from element)
  // handleToggle function needs information about lightId

  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function handleTurnAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  const countLightsOn = lights.filter((light) => light.isOn).length;

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        handleTurnAllOff={handleTurnAllOff}
        handleTurnAllOn={handleTurnAllOn}
        countLightsOn={countLightsOn}
      />
    </Layout>
  );
}
