// import Link from "../components/Link";
// import Lights from "../components/Lights";

// export default function Rooms({ lights, toggleLight }) {
//   return (
//     <>
//       <Link href="/">← Back home</Link>
//       <h1>All Rooms</h1>
//       <Lights lights={lights} toggleLight={toggleLight} />
//     </>
//   );
// }
// =========================== ORIGINAL CODE ABOVE

import Link from "../components/Link";
import Lights from "../components/Lights";
import QuickActions from "../components/QuickActions";

export default function Rooms({
  lights,
  handleToggle,
  handleTurnAllOff,
  handleTurnAllOn,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <div>
        <QuickActions
          onTurnAllOff={handleTurnAllOff}
          onTurnAllOn={handleTurnAllOn}
        />
      </div>
      <Lights lights={lights} handleToggle={handleToggle} />
    </>
  );
}
