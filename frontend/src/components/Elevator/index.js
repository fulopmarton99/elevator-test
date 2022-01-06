import React from "react";
import { Wrapper } from "./Elevator.styles";
import SevenSegment from "../SevenSegment";

import Keypad from "../Keypad";

const Elevator = ({ id, position, order, destination }) => {
  const floor = Math.round(position);
  return (
    <Wrapper position={position} destination={destination} order={order}>
      <SevenSegment value={destination}></SevenSegment>
      <Keypad style={{ "z-index": "2" }} elevatorId={id}></Keypad>
      <h1 style={{ transform: "translate(0,50%)", width: "10px" }}>{id}</h1>
    </Wrapper>
  );
};

export default Elevator;
