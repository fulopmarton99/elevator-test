const express = require("express"),
  elevatorManager = require("../elevator_manager");

const router = express.Router();

router.post("/:floorId", (req, res) => {
  const { floorId } = req.params;

  elevatorManager.callElevator(Number(floorId));
  res.send('{"status":"SUCCESS"}');
});

module.exports = router;
