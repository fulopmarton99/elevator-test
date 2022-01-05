const express = require("express"),
  elevatorManager = require("../../elevator_manager");

const router = express.Router();

router.get("/", (req, res) => {
  // console.log(req.params);
  // return;
  res.set({
    "Cache-Control": "no-cache",
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
  });
  res.flushHeaders();
  res.write(
    `data: ${JSON.stringify({
      type: "status",
      elevators: elevatorManager.getElevators(),
    })}\n\n`
  );
  ///######
  // const { elevatorId } = req.params;
  // const elevator = elevatorManager.getElevator(elevatorId);
  // console.log(`Elevator ${elevatorId} streaming`);
  elevatorManager.subscribe(res);

  res.on("close", () => {
    // clearInterval(intervalId);
    elevatorManager.unsubscribe(res);
  });
});

module.exports = router;
