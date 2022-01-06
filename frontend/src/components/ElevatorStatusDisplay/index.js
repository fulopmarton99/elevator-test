import React from "react";

import {
  Wrapper,
  LiftName,
  DirectionDisplay,
} from "./ElevatorStatusDisplay.styles";

const ElevatorStatusDisplay = ({ status, elevatorName, direction }) => {
  return (
    <Wrapper>
      <LiftName>{elevatorName}</LiftName>
      <DirectionDisplay key="A" direction={(direction === 1).toString()}>
        ^
      </DirectionDisplay>
      <DirectionDisplay key="B" direction={(direction === -1).toString()}>
        {" "}
        V
      </DirectionDisplay>
    </Wrapper>
  );
};

export default ElevatorStatusDisplay;
