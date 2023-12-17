import Link from "next/link";
import Form from "@/components/Form";

export default function form({ storedActivities }) {
  return (
    <>
      <p>
        <Link href="/">Home</Link>
      </p>
      <Form storedActivities={storedActivities} />
    </>
  );
}
