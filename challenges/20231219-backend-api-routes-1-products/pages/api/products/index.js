import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
  const products = getAllProducts();
  response.status(200).json(products);

  if (json(products) === "") {
    response.status(404).end("Keine Produkte vorhanden!");
  }
  response.status(200).json(product);
}
