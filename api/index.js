const express = require("express"),
  bodyParser = require("body-parser"),
  elevatorRoutes = require("./elevators.js"),
  floorRoutes = require("./floors"),
  eventRoutes = require("./events");

const router = express.Router();
router.use(bodyParser.json());

router.use("/elevators", elevatorRoutes);
router.use("/floors", floorRoutes);
router.use("/events", eventRoutes)
module.exports = router;
