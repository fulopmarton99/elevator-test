import "./App.css";

import Elevator from "./components/Elevator";
import SevenSegment from "./components/SevenSegment";

import Keypad from "./components/Keypad";
import ElevatorCallButton from "./components/ElevatorCallButton";
import Floor from "./components/Floor";

import { useState, useEffect } from "react";
// import React from "react";

function App() {
  // return <Floor level={0}></Floor>;

  const [positionA, setPositionA] = useState(0);
  const [positionB, setPositionB] = useState(6);
  const [destinationA, setDestinationA] = useState(0);
  const [destinationB, setDestinationB] = useState(6);
  const [elevatorDirectionA, setElevatorDirectionA] = useState(0);
  const [elevatorDirectionB, setElevatorDirectionB] = useState(0);

  //refresh floor display
  const moveToDestination = (
    position,
    setPosition,
    setDestination,
    setDirection,
    finalDestination
  ) => {
    position = Number(position);
    finalDestination = Number(finalDestination);

    if (position !== finalDestination) {
      const direction = finalDestination - position > 0 ? 1 : -1;
      setDirection(direction);
      const nextDestination =
        direction === 1
          ? Math.floor(position + direction)
          : Math.ceil(position + direction);
      setTimeout(() => {
        moveToDestination(
          nextDestination,
          setPosition,
          setDestination,
          setDirection,
          finalDestination
        );
      }, 1000);
      setPosition(position);
      setDestination(nextDestination);
    } else {
      setDirection(0);
    }
  };

  useEffect(() => {
    let eventSource = new EventSource(
      "http://localhost:3030/api/events/elevators/"
    );
    eventSource.onmessage = (e) => {
      console.log("NEW MESSAGE");
      console.log(e.data);
      const data = JSON.parse(e.data);
      if (data.type === "status") {
        setPositionA(data.elevators.A.position);
        setDestinationA(data.elevators.A.destination);
        setPositionB(data.elevators.B.position);
        setDestinationB(data.elevators.B.destination);
      } else if (data.type === "update") {
        if ("A" in data.elevators) {
          const { position, destination } = data.elevators.A;
          moveToDestination(
            position,
            setPositionA,
            setDestinationA,
            setElevatorDirectionA,
            destination
          );
        }
        if ("B" in data.elevators) {
          const { position, destination } = data.elevators.B;
          moveToDestination(
            position,
            setPositionB,
            setDestinationB,
            setElevatorDirectionB,
            destination
          );
        }
      }
    };
    eventSource.onerror = () => {
      console.log("SSE error");
    };
  }, []);

  return (
    <div style={{ width: "100%", display: "inline-block" }}>
      {[...Array(7).keys()].reverse().map((level) => {
        return (
          <Floor
            key={level}
            level={level}
            elevatorDirectionA={elevatorDirectionA}
            elevatorDirectionB={elevatorDirectionB}
          ></Floor>
        );
      })}
      <Elevator
        key="A"
        id="A"
        position={positionA}
        destination={destinationA}
        order={0}
      ></Elevator>
      <Elevator
        key="B"
        id="B"
        position={positionB}
        destination={destinationB}
        order={1}
      ></Elevator>
    </div>
  );
}

export default App;
