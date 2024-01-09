import useSWR from "swr";
import { useState } from "react";

import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { StyledButton } from "../Button/Button.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const editData = Object.fromEntries(formData);

    const modifiedProductData = Object.fromEntries(
      Object.entries({ ...data }).map(([key, value]) => [
        key,
        editData[key] !== undefined && editData[key] !== ""
          ? editData[key]
          : value,
      ])
    );

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedProductData),
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

  async function handleDeleteProduct(event) {
    // console.log("Delete clicked");
    // safety catch here, i.e. popup "insert last four numbers of id if you really want to delete"
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <div>
        <StyledButton
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          {/* <span role="img" aria-label="A pencil">
            ✏️
          </span> */}
          Edit
        </StyledButton>
        <StyledButton onClick={handleDeleteProduct} disabled={isEditMode}>
          Delete
          {/* <span role="img" aria-label="A cross indicating deletion">
            ❌
          </span> */}
        </StyledButton>
      </div>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          value={data.productData}
          isEditMode={true}
        />
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

// ========================= ORIGINAL CODE BELOW
// import useSWR from "swr";
// import { useRouter } from "next/router";
// import { ProductCard } from "./Product.styled";
// import { StyledLink } from "../Link/Link.styled";
// import Comments from "../Comments";

// export default function Product() {
//   const router = useRouter();
//   const { id } = router.query;

//   const { data, isLoading } = useSWR(`/api/products/${id}`);

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (!data) {
//     return;
//   }

//   return (
//     <ProductCard>
//       <h2>{data.name}</h2>
//       <p>Description: {data.description}</p>
//       <p>
//         Price: {data.price} {data.currency}
//       </p>
//       {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
//       <StyledLink href="/">Back to all</StyledLink>
//     </ProductCard>
//   );
// }
