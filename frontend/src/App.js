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

  useEffect(() => {
    console.log("IE");
    let eventSource = new EventSource(
      "http://localhost:3030/api/events/elevators/A"
    );
    eventSource.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setPositionA(data.position);
    };
    eventSource.onerror = () => {
      console.log("SSE error");
    };
  }, []);

  return (
    <div style={{ width: "100%", display: "inline-block" }}>
      {[...Array(7).keys()].reverse().map((level) => {
        return (
          <div key={level}>
            <Floor key={level} level={level}></Floor>
            <br></br>
          </div>
        );
      })}
      <Elevator floor={positionA} id="A" position={positionA}></Elevator>
    </div>
  );

  // return (
  //   <div>
  //     <Elevator floor={0}></Elevator>
  //     <Elevator floor={6}></Elevator>
  //   </div>
  // );
  // return (
  //   <div>
  //     <Keypad></Keypad>
  //     {/* <Keypad></Keypad> */}
  //   </div>
  // );
  // return (
  //   <div>
  //     <Elevator floor={3}></Elevator>
  //   </div>
  // );
  // return <SevenSegment value={9}></SevenSegment>;
}

export default App;
