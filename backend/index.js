const express = require("express"),
  apiRoutes = require("./api");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
// rest api to control elevators
app.use("/api", apiRoutes);
app.listen(3030);
