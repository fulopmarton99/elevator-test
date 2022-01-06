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
  var eventQueue = [];
  const listeners = {};

  var elevators = elevator_array_to_dictionary(
    config.elevators.map((elevator) => {
      const [elevatorName, elevatorPosition] = elevator;
      return new Elevator(elevatorName, elevatorPosition);
    })
  );
  const sendEvent = (event) => {
    Object.values(listeners).forEach((res) => {
      res.write(`data: ${JSON.stringify(event)}\n\n`);
    });
  };

  return {
    elevators: elevators,
    logStatus: () => {
      console.log(elevators);
      return elevators;
    },
    getElevator: (elevatorId) => {
      return elevators[elevatorId];
    },
    sendEvent,
    getElevators: () => {
      return elevators;
    },
    callElevator: (floor) => {
      const freeElevators = Object.values(elevators).filter((elevator) => {
        return !elevator.occupied;
      });
      if (freeElevators.length == 0) {
        eventQueue.push((elevator) => {
          elevator.sendTo(floor, () => {
            const event = { type: "update", elevators: {} };
            event.elevators[elevator.name] = elevator;
            sendEvent(event);
          });
        });
      } else {
        const bestElevator = best_elevator(freeElevators, floor);
        bestElevator.sendTo(floor, () => {
          const event = { type: "update", elevators: {} };
          event.elevators[bestElevator.name] = bestElevator;
          sendEvent(event);
        });
      }
    },
    floorCount: () => {
      return config.stories;
    },
    sendElevator: (elevatorId, targetFloor) => {
      //sending from inside the elevator

      elevators[elevatorId].sendTo(targetFloor, () => {
        const event = { type: "update", elevators: {} };
        event.elevators[elevatorId] = elevators[elevatorId];
        sendEvent(event);
      });
    },
    freeElevator: (elevatorId) => {
      elevators[elevatorId].occupied = false;
      return;
    },
    subscribe: (key, res) => {
      console.log("subscribe " + key);
      listeners[key] = res;
    },

    unsubscribe: (key) => {
      console.log("unsubscribe " + key);
      delete listeners[key];
    },

    releaseElevator: (elevatorId) => {
      elevators[elevatorId].occupied = false;
      if (eventQueue.length != 0) {
        const event = eventQueue[0];
        eventQueue = eventQueue.slice(1, -1);
        event(elevators[elevatorId]);
      } else {
        return;
      }
    },
  };
})();

Object.values(elevatorManager.elevators).forEach((elevator) => {
  elevator.setOnFreeCallback(elevatorManager.releaseElevator);
});
module.exports = elevatorManager;
