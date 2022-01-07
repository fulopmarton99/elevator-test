import "./App.css";

import Elevator from "./components/Elevator";

import Floor from "./components/Floor";

import { useState, useEffect, useReducer } from "react";
import React from "react";

export const apiHost = process.env.API_HOST || "http://localhost:3030";

const reducer = (state, action) => {
  if (action.type === "move") {
    return {
      ...state,
      position: state.destination,
      destination: state.destination + action.payload.direction,
      direction: action.payload.direction,
    };
  } else if (action.type === "arrive") {
    return {
      ...state,
      position: state.destination,
      direction: 0,
    };
  } else if (action.type === "status") {
    const { destination } = action.payload;

    return { ...state, position: destination, destination };
  } else {
    const { position, destination } = action.payload;
    const direction =
      destination > position ? 1 : destination === position ? 0 : -1;
    return { ...state, ...action.payload, direction };
  }
};

function App() {
  const [stateElevatorA, dispatchElevatorA] = useReducer(reducer, {
    position: 0,
    destination: 0,
    direction: 0,
  });
  const [stateElevatorB, dispatchElevatorB] = useReducer(reducer, {
    position: 6,
    destination: 6,
    direction: 0,
  });
  const [destinationA, setDestinationA] = useState(0);

  const [destinationB, setDestinationB] = useState(6);

  useEffect(() => {
    if (stateElevatorA.destination !== destinationA) {
      const timeout = setTimeout(() => {
        const direction = stateElevatorA.destination < destinationA ? 1 : -1;
        dispatchElevatorA({
          type: "move",
          payload: { direction },
        });
      }, 1000 * (stateElevatorA.position !== stateElevatorA.destination));
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        dispatchElevatorA({ type: "arrive" });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [destinationA, stateElevatorA.destination, stateElevatorA.position]);

  useEffect(() => {
    if (stateElevatorB.destination !== destinationB) {
      const timeout = setTimeout(() => {
        const direction = stateElevatorB.destination < destinationB ? 1 : -1;
        dispatchElevatorB({
          type: "move",
          payload: { direction },
        });
      }, 1000 * (stateElevatorB.position !== stateElevatorB.destination));
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        dispatchElevatorB({ type: "arrive" });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [destinationB, stateElevatorB.destination, stateElevatorB.position]);

  useEffect(() => {
    let eventSource = new EventSource(`${apiHost}/api/events/elevators/`);
    eventSource.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === "status") {
        dispatchElevatorA({
          type: "status",
          payload: data.elevators.A,
        });
        setDestinationA(data.elevators.A.destination);
        dispatchElevatorB({
          type: "status",
          payload: data.elevators.B,
        });
        setDestinationB(data.elevators.B.destination);
      } else if (data.type === "update") {
        if ("A" in data.elevators) {
          setDestinationA(data.elevators.A.destination);
        }
        if ("B" in data.elevators) {
          setDestinationB(data.elevators.B.destination);
        }
      }
    };
    eventSource.onerror = () => {
      console.log("SSE error");
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", display: "inline-block" }}>
      {[...Array(7).keys()].reverse().map((level) => {
        return (
          <Floor
            key={level}
            level={level}
            elevatorDirectionA={stateElevatorA.direction}
            elevatorDirectionB={stateElevatorB.direction}
          ></Floor>
        );
      })}
      <Elevator
        key="A"
        id="A"
        position={stateElevatorA.position}
        destination={stateElevatorA.destination}
        order={0}
      ></Elevator>
      <Elevator
        key="B"
        id="B"
        position={stateElevatorB.position}
        destination={stateElevatorB.destination}
        order={1}
      ></Elevator>
    </div>
  );
}

export default App;
