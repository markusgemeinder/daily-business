import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link href="/form">Form</Link>
      </p>
    </div>
  );
}
