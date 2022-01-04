const express = require("express"),
  elevatorManager = require("../elevator_manager.js");

const router = express.Router();

router.get("/:elevatorId", (req, res) => {
  res.json(elevatorManager.getElevator(req.params.elevatorId));
});

router.get("/", (req, res) => {
  res.json(elevatorManager.getElevators());
});




module.exports = router;
