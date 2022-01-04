import React from "react";
import { Wrapper, FloorDisplay } from "./Elevator.styles";

const Elevator = ({ floor }) => {
  return (
    <Wrapper>
          <FloorDisplay value={floor}></FloorDisplay>
          
    </Wrapper>
  );
};

export default Elevator;
