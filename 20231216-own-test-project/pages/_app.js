import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [storedActivities, setStoredActivities] = useLocalStorageState(
    "activities",
    { default: [] }
  );
  // const sampleData = [
  //   { id: "abcdefg12", name: "Jürgen", isForGoodWeather: true },
  //   { id: "34abcdefg", name: "Markus", isForGoodWeather: false },
  //   // { id: "hijklmn65", name: "Verena", isForGoodWeather: true },
  //   // { id: "78hijklmn", name: "Kerstin", isForGoodWeather: true },
  //   // { id: "opqrstu90", name: "Jassi", isForGoodWeather: true },
  //   // { id: "12opqrstu", name: "Marvin", isForGoodWeather: false },
  // ];
  // setStoredActivities(sampleData);

  const initialStoredActivities =
    typeof window !== "undefined"
      ? localStorage.getItem("activities") !== null
        ? localStorage.getItem("activities")
        : "[]"
      : "[]";

  setStoredActivities(JSON.parse(initialStoredActivities));
  // console.log(JSON.parse(initialStoredActivities));

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} storedActivities={storedActivities} />
    </>
  );
}

// ============================================= FIXED CODE BELOW

// import GlobalStyle from "../styles";
// import useLocalStorageState from "use-local-storage-state";

// export default function App({ Component, pageProps }) {
//   const [storedActivities, setStoredActivities] = useLocalStorageState(
//     "activities",
//     { default: [] }
//   );
//   // const sampleData = [
//   //   { id: "abcdefg12", name: "Jürgen", isForGoodWeather: true },
//   //   { id: "34abcdefg", name: "Markus", isForGoodWeather: false },
//   //   // { id: "hijklmn65", name: "Verena", isForGoodWeather: true },
//   //   // { id: "78hijklmn", name: "Kerstin", isForGoodWeather: true },
//   //   // { id: "opqrstu90", name: "Jassi", isForGoodWeather: true },
//   //   // { id: "12opqrstu", name: "Marvin", isForGoodWeather: false },
//   // ];
//   // setStoredActivities(sampleData);

//   const initialStoredActivities =
//     typeof window !== "undefined"
//       ? localStorage.getItem("activities") !== null
//         ? localStorage.getItem("activities")
//         : "[]"
//       : "[]";

//   setStoredActivities(JSON.parse(initialStoredActivities));
//   // console.log(JSON.parse(initialStoredActivities));

//   return (
//     <>
//       <GlobalStyle />
//       <Component {...pageProps} storedActivities={storedActivities} />
//     </>
//   );
// }
