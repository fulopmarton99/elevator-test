const express = require("express"),
  elevatorRoutes = require("./elevators.js");

const router = express.Router();



router.use("/elevators", elevatorRoutes);

module.exports = router;
