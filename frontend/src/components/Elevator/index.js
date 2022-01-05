import React from "react";
import { Wrapper } from "./Elevator.styles";
import SevenSegment from "../SevenSegment";

import Keypad from "../Keypad";

const Elevator = ({ id, position, order, destination }) => {
  const floor = Math.round(position);
  return (
    <Wrapper position={position} destination={destination} order={order}>
      <h1 style={{ transform: "translate(0,50%)" }}>{id}</h1>
      <SevenSegment value={destination}></SevenSegment>
      <Keypad style={{ order: "-1" }}></Keypad>
    </Wrapper>
  );
};

export default Elevator;
