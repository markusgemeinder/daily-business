import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544"
  );

  // console.log(data.longitude);
  // console.log(data.latitude);

  if (error) return <div>{error.message}</div>; //
  if (isLoading) return <div>loading...</div>;

  // ======================== Variante 1
  // with additional handleRefresh() function

  function handleRefresh() {
    mutate();
  }

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={handleRefresh} // passes function (not result of function) as prop
      />
    </main>
  );

  // ======================== Variante 2
  // with implicit function

  // return (
  //   <main>
  //     <Map longitude={data.longitude} latitude={data.latitude} />
  //     <Controls
  //       longitude={data.longitude}
  //       latitude={data.latitude}
  //       onRefresh={() => mutate()}
  //     />
  //   </main>
  // );
  // ========================
}

// ======================== ORIGINAL CODE BELOW

// import { useEffect, useState } from "react";
// import Controls from "../Controls/index";
// import Map from "../Map/index";

// const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// export default function ISSTracker() {
//   const [coords, setCoords] = useState({
//     longitude: 0,
//     latitude: 0,
//   });

//   async function getISSCoords() {
//     try {
//       const response = await fetch(URL);
//       if (response.ok) {
//         const data = await response.json();
//         setCoords({ longitude: data.longitude, latitude: data.latitude });
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       getISSCoords();
//     }, 5000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <main>
//       <Map longitude={coords.longitude} latitude={coords.latitude} />
//       <Controls
//         longitude={coords.longitude}
//         latitude={coords.latitude}
//         onRefresh={getISSCoords}
//       />
//     </main>
//   );
// }
