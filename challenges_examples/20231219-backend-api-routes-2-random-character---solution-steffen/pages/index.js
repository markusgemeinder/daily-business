import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <ul>
      <li key={data.firstNameid}>
        <h2>
          {data.prefix} {data.firstName} {data.lastName}
        </h2>
        <p>Age: {data.age}</p>
        <p>Twitter: {data.twitterName}</p>
        <p>geohash: {data.geohash}</p>
      </li>
    </ul>
  );
}
