// ============================= MongoDB backend
// take care of the import (name confusion)

import Product from "@/db/models/Product";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    response.status(200).json(products);
    return;
  } else {
    response.status(405).json({ message: "Method not allowed" });
    return;
  }
}

// ============================= local backend
// import { products } from "../../../lib/products";

// export default function handler(request, response) {
//   return response.status(200).json(products);
// }
