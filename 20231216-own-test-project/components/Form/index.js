import { useState, useEffect } from "react";
import { uid } from "uid";

export default function Form({ storedActivities }) {
  // ===============================
  const formDataDefault = {
    name: "",
    isForGoodWeather: false,
  };
  const [formData, setFormData] = useState(formDataDefault);

  // ===============================

  useEffect(() => {
    document.getElementById("form").reset();
    document.getElementById("name").focus();
  }, [formData]);

  // ===============================

  const onAddActivity = (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // const newActivity = [{ id: uid(), ...data }];
    // delivers checkbox as string >>> if checked = "on", if not checked nothing

    const newActivity = [
      {
        id: uid(),
        name: formData.name,
        isForGoodWeather: formData.isForGoodWeather,
      },
    ];

    const updatedStoredActivities = Array.isArray(storedActivities)
      ? [newActivity, ...storedActivities]
      : [newActivity];

    localStorage.setItem("activities", JSON.stringify(updatedStoredActivities));

    setFormData(formDataDefault);
    return updatedStoredActivities;
  };

  // ===============================

  return (
    <>
      <form onSubmit={onAddActivity} id="form">
        <h2>Add new activity</h2>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        ></input>
        <br />
        <br />
        <label htmlFor="isForGoodWeather">Good-weather activity: </label>
        <input
          type="checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
          checked={formData.isForGoodWeather}
          onChange={(event) =>
            setFormData({
              ...formData,
              isForGoodWeather: event.target.checked,
            })
          }
        ></input>
        <br />
        <br />
        <button>submit</button>
      </form>
      <div>
        <button onClick={() => localStorage.clear()}>clear localStorage</button>
      </div>
    </>
  );
}

// ============================================= FIXED CODE BELOW

// import { useState, useEffect } from "react";
// import { uid } from "uid";

// export default function Form({ storedActivities }) {
//   // ===============================
//   const formDataDefault = {
//     name: "",
//     isForGoodWeather: false,
//   };
//   const [formData, setFormData] = useState(formDataDefault);

//   // ===============================

//   useEffect(() => {
//     document.getElementById("form").reset();
//     document.getElementById("name").focus();
//   }, [formData]);

//   // ===============================

//   const onAddActivity = (event) => {
//     event.preventDefault();

//     // const formData = new FormData(event.target);
//     // const data = Object.fromEntries(formData);
//     // const newActivity = [{ id: uid(), ...data }];
//     // delivers checkbox as string >>> if checked = "on", if not checked nothing

//     const newActivity = [
//       {
//         id: uid(),
//         name: formData.name,
//         isForGoodWeather: formData.isForGoodWeather,
//       },
//     ];

//     const updatedStoredActivities = Array.isArray(storedActivities)
//       ? [newActivity, ...storedActivities]
//       : [newActivity];

//     localStorage.setItem("activities", JSON.stringify(updatedStoredActivities));

//     setFormData(formDataDefault);
//     return updatedStoredActivities;
//   };

//   // ===============================

//   return (
//     <>
//       <form onSubmit={onAddActivity} id="form">
//         <h2>Add new activity</h2>
//         <label htmlFor="name">Name: </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={(event) =>
//             setFormData({ ...formData, name: event.target.value })
//           }
//         ></input>
//         <br />
//         <br />
//         <label htmlFor="isForGoodWeather">Good-weather activity: </label>
//         <input
//           type="checkbox"
//           id="isForGoodWeather"
//           name="isForGoodWeather"
//           checked={formData.isForGoodWeather}
//           onChange={(event) =>
//             setFormData({
//               ...formData,
//               isForGoodWeather: event.target.checked,
//             })
//           }
//         ></input>
//         <br />
//         <br />
//         <button>submit</button>
//       </form>
//       <div>
//         <button onClick={() => localStorage.clear()}>clear localStorage</button>
//       </div>
//     </>
//   );
// }
