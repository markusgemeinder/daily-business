import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const joke = await Joke.findById(id);
    if (!joke) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(joke);
  }

  if (request.method === "PUT") {
    console.log("hit the update part");
    const jokeData = request.body;
    await Joke.findByIdAndUpdate(id, jokeData);
    response.status(200).json({ status: "Joke Updated" });
  }

  if (request.method === "DELETE") {
    console.log("about to delete");
    await Joke.findByIdAndDelete(id);
    response.status(200).json({ status: "Joke Deleted" });
  }
}
