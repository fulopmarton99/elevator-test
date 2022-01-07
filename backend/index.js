const express = require("express"),
  apiRoutes = require("./api"),
  morgan = require("morgan"),
  cors = require("cors");

const app = express();

app.use(cors());

app.use(morgan("combined"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api", apiRoutes);
app.listen(3030);
