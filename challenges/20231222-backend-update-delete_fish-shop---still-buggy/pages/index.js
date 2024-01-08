import ProductList from "../components/ProductList";
import styled from "styled-components";
import ProductForm from "../components/ProductForm";
import useSWR from "swr";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

export default function HomePage() {
  const { mutate } = useSWR("/api/products");

  async function handleAddProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    console.log("productData:", productData);
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    }
    if (response.ok) {
      mutate();
    }
    event.target.reset();
  }

  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} isAddMode={true} />
      <hr />
      <ProductList />
    </>
  );
}

// ========================= ORIGINAL CODE BELOW
// import ProductList from "../components/ProductList";
// import styled from "styled-components";
// import ProductForm from "../components/ProductForm";

// const Heading = styled.h1`
//   text-align: center;
//   color: var(--color-nemo);
// `;

// export default function HomePage() {
//   return (
//     <>
//       <Heading>
//         <span role="img" aria-label="A fish">
//           🐠
//         </span>
//         Fish Shop
//       </Heading>
//       <ProductForm />
//       <hr />
//       <ProductList />
//     </>
//   );
// }
