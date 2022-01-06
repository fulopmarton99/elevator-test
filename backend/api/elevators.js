const express = require("express"),
  elevatorManager = require("../elevator_manager.js");

const router = express.Router();

router.post("/:elevatorId/:targetFloor", (req, res) => {
  const { elevatorId, targetFloor } = req.params;

  if (
    Number(targetFloor) >= elevatorManager.floorCount() ||
    Number(targetFloor) < 0
  ) {
    res.json({ status: `NON EXISTENT FLOOR ${targetFloor}` });
    return;
  }
  elevatorManager.sendElevator(elevatorId, Number(targetFloor));
  res.json({ status: "SUCCESS" });
});

router.get("/:elevatorId", (req, res) => {
  res.json(elevatorManager.getElevator(req.params.elevatorId));
});

router.get("/", (req, res) => {
  res.json(elevatorManager.getElevators());
});

module.exports = router;
