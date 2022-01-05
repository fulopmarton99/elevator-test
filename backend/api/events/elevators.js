const express = require("express"),
  elevatorManager = require("../../elevator_manager");

const router = express.Router();

router.get("/:elevatorId", (req, res) => {
  // console.log(req.params);
  // return;
  res.set({
    "Cache-Control": "no-cache",
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    // enabling CORS
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  });
  res.flushHeaders();
  ///######
  const { elevatorId } = req.params;
  const elevator = elevatorManager.getElevator(elevatorId);
  // console.log(`Elevator ${elevatorId} streaming`);
  let intervalId = setInterval(() => {
    // console.log(elevator);
    res.write(`data: ${JSON.stringify(elevator)}\n\n`);
  }, 200);

  res.on("close", () => {
    clearInterval(intervalId);
  });
});

module.exports = router;
