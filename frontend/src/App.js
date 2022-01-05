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

  useEffect(() => {
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

  useEffect(() => {
    let eventSource = new EventSource(
      "http://localhost:3030/api/events/elevators/B"
    );
    eventSource.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setPositionB(data.position);
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
      <Elevator id="A" position={positionA} order={0}></Elevator>
      <Elevator id="B" position={positionB} order={1}></Elevator>
    </div>
  );
}

export default App;
