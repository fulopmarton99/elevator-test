import React from "react";
import { Wrapper } from "./Elevator.styles";
import SevenSegment from "../SevenSegment";

import Keypad from "../Keypad";

const Elevator = ({ id, position, order }) => {
  const floor = Math.round(position);
  return (
    <Wrapper position={position} order={order}>
      <h1 style={{ float: "left" }} style={{ transform: "translate(0,50%)" }}>
        {id}
      </h1>
      <SevenSegment value={floor}></SevenSegment>
      <Keypad style={{ order: "-1" }}></Keypad>
    </Wrapper>
  );
};

export default Elevator;
