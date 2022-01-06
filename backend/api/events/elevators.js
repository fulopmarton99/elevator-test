const express = require("express"),
  elevatorManager = require("../../elevator_manager");

const router = express.Router();

router.get("/", (req, res) => {
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
  const key = Math.floor(Math.random() * 1000000);
  elevatorManager.subscribe(key, res);

  res.on("close", () => {
    elevatorManager.unsubscribe(key);
  });
});

module.exports = router;
