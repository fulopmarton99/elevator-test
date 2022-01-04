const config = require("./config.js"),
  Elevator = require("./elevator.js");

const elevator_array_to_dictionary = (array) =>
  array.reduce((obj, item) => {
    obj[item.name] = item;
    return obj;
  }, {});

const best_elevator = (elevators, targetFloor) => {
  if (elevators.length == 0) {
    return;
  }
  return elevators.reduce((bestSoFar, item) => {
    const [d1, d2] = [
      Math.abs(bestSoFar.position - targetFloor),
      Math.abs(item.position - targetFloor),
    ];
    if (d1 < d2) {
      return bestSoFar;
    } else if (d1 > d2) {
      return item;
    } else {
      if (bestSoFar.position < item.position) {
        return bestSoFar;
      } else {
        return item;
      }
    }
  }, elevators[0]);
};

var elevatorManager = (function () {
  var elevatorEvent = (event) => {};

  var eventQueue = [];

  var elevators = elevator_array_to_dictionary(
    config.elevators.map((elevator) => {
      const [elevatorName, elevatorPosition] = elevator;
      return new Elevator(elevatorName, elevatorPosition);
    })
  );
  return {
    elevators: elevators,
    logStatus: () => {
      console.log(elevators);
      return elevators;
    },
    getElevator: (elevatorId) => {
      return elevators[elevatorId];
    },
    getElevators: () => {
      return elevators;
    },
    callElevator: (floor) => {
      // console.log(elevators);
      const freeElevators = Object.values(elevators).filter((elevator) => {
        return !elevator.occupied;
      });
      if (freeElevators.length == 0) {
        eventQueue.push((elevator) => {
          elevator.sendTo(elevator);
        }); // TODO: CREATE EVENT
      } else {
        const bestElevator = best_elevator(freeElevators, floor);
        bestElevator.sendTo(floor);
      }
    },
    freeElevator: (elevatorId) => {
      this.elevators[elevatorId].occupied = false;
      return;
    },
    releaseElevator: (elevatorId) => {
      this.elevators[elevatorId].occupied = false;
      if (eventQueue.length != 0) {
        const event = eventQueue[0];
        eventQueue = eventQueue.slice(1, -1);
        event(this.elevators[elevatorId]);
      } else {
        return;
      }
    },
  };
})();

module.exports = elevatorManager;
