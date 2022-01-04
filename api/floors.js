const express = require("express"),
    elevatorManager = require("../elevator_manager");

const router = express.Router();

router.post("/:floorId", (req, res) => {
    //
    const { floorId } = req.params;
    elevatorManager.callElevator(floorId);
});


module.exports = router;