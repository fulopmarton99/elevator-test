const express = require("express"),
  apiRoutes = require("./api"),
  morgan = require("morgan"),
  cors = require("cors");

const app = express();

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        console.log(origin);
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(morgan("combined"));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api", apiRoutes);
app.listen(3030);
