import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Products() {
  const { data, isLoading} = useSWR("/api/products/", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return <h1>No Products available.</h1>;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}

// ================================= CODE STEFFEN

// import useSWR from "swr";
// import Link from "next/link";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// export default function ProductList() {
//   const { data, isLoading } = useSWR("/api/products", fetcher);

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (!data) {
//     return;
//   }

//   return (
//     <ul>
//       {data.map(({ name, id, description, price, currency, category }) => (
//         <li key={id}>
//           <h1>{name} </h1>
//           <small>id: {id}</small>
//           <p>Description: {description}</p>
//           <p>
//             Price:
//             {price}
//             {currency}
//           </p>
//           <p>{category}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }
