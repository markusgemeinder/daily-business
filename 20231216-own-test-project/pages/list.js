import Link from "next/link";
import List from "@/components/List";

export default function list({ storedActivities }) {
  return (
    <>
      <p>
        <Link href="/">Home</Link>
      </p>
      <List storedActivities={storedActivities} />
    </>
  );
}
