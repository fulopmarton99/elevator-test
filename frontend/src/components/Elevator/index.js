import React from "react";
import { Wrapper, FloorDisplay } from "./Elevator.styles";
import SevenSegment from "../SevenSegment";

import Keypad from "../Keypad";

const Elevator = ({ floor }) => {
  return (
    <Wrapper>
      <SevenSegment value={floor}></SevenSegment>
      <Keypad></Keypad>
    </Wrapper>
  );
};

export default Elevator;
