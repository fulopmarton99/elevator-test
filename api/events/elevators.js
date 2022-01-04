const express = require("express"),
  elevatorManager = require("../../elevator_manager");

const router = express.Router();

router.get("/:elevatorId", (req, res) => {
  const { elevatorId } = req.params;
  const elevator = elevatorManager.getElevator(elevatorId);
  let intervalId = setInterval(() => {
    res.write(`data: ${JSON.stringify(elevator)}\n\n`);
  }, 200);

  res.on("close", () => {
    clearInterval(intervalId);
  });
});

module.exports = router;
