import Link from "next/link";
import List from "@/components/List";

export default function list() {
  return (
    <>
      <p>
        <Link href="/">Home</Link>
      </p>
      <List />
    </>
  );
}
