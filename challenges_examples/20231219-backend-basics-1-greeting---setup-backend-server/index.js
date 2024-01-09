import { server } from "./server.js";

const port = 4711;
server.listen(port, () => {
  console.log("Our server is running on http://localhost:" + port + "/");
});
