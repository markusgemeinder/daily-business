import { server } from "./server.js";

const port = 1337;
server.listen(port, () => {
  console.log("Our Server is running on http://localhost:" + port + "/");
});
