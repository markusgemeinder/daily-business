import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }

  // edit route
  if (request.method === "PUT") {
    // console.log("hit the update part")
    const updatedProduct = request.body;
    await Product.findByIdAndUpdate(id, updatedProduct);
    response.status(200).json({ status: "Product successfully updated." });
  }

  // delete route
  if (request.method === "DELETE") {
    // console.log("hit the delete part")
    await Product.findByIdAndDelete(id);
    response.status(200).json({ status: "Product successfully deleted." });
  }
}

// ========================= ORIGINAL CODE BELOW
// import dbConnect from "../../../db/connect";
// import Product from "../../../db/models/Product";

// export default async function handler(request, response) {
//   await dbConnect();
//   const { id } = request.query;

//   if (request.method === "GET") {
//     const product = await Product.findById(id).populate("reviews");

//     if (!product) {
//       return response.status(404).json({ status: "Not Found" });
//     }

//     response.status(200).json(product);
//   }
// }
