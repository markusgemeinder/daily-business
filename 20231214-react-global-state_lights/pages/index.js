import Link from "../components/Link";

export default function HomePage({ countLightsOn }) {
  return (
    <div>
      <h1>Home</h1>
      <p>
        {countLightsOn}{" "}
        {countLightsOn !== 1 ? "lights are on." : "light is on."}
      </p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
