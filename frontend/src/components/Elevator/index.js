import React from "react";
import { Wrapper, FloorDisplay } from "./Elevator.styles";
import SevenSegment from "../SevenSegment";
const Elevator = ({ floor }) => {
  return (
    <Wrapper>
      <SevenSegment value={floor}></SevenSegment>
    </Wrapper>
  );
};

export default Elevator;
