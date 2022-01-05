const express = require("express"),
  elevatorRoutes = require("./elevators.js");

const router = express.Router();

// router.get((req, res, next) => {
//   // set headers for events
//   console.log("MV");

//   next();
// });

router.use("/elevators", elevatorRoutes);

module.exports = router;
