const express = require("express"),
    elevatorRoutes = require("./elevators");

const router = express.Router();

router.use((req, res, next) => {
    // set headers for events
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
    });
    res.flushHeaders();
    next();
})

router.get("/elevators", elevatorRoutes)


module.exports = router;
