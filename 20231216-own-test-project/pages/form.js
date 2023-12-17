import Link from "next/link";
import Form from "@/components/Form";

export default function form() {
  return (
    <>
      <p>
        <Link href="/">Home</Link>
      </p>
      <Form />
    </>
  );
}
