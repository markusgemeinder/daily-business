import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.statusCode = 200; // muss immer gesetzt werden, Standard!
  response.end("Hello, Markus!");
});
