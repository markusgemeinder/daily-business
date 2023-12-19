import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`/api/products/${id}`, fetcher); // Fix the path here

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return <h1>No Product available.</h1>;
  }

  return (
    <>
      <h1>{data.name}</h1>
      <small>ID: {id}</small>
      <p>
        <b>Category:</b> {data.category}
      </p>
      <p>
        <b>Description:</b> {data.description}
      </p>
      <p>
        <b>Price:</b> {data.price} {data.currency}
      </p>
      <Link href="/">Back to all</Link>
    </>
  );
}
