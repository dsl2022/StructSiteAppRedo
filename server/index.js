const app = require("./app");
require("dotenv").config();
// start express server on port 5000
app.listen(5000, () => {
  console.log("node env", process.env.NODE_ENV);
  console.log("server started on port 5000");
});
