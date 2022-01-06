import React from "react";
import upArrow from "../../svgs/arrow-up-solid.svg";
import downArrow from "../../svgs/arrow-down-solid.svg";
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
        <img src={upArrow} alt="Up arrow of lift"></img>
      </DirectionDisplay>

      <DirectionDisplay key="B" direction={(direction === -1).toString()}>
        <img src={downArrow} alt="Down arrow of lift"></img>
      </DirectionDisplay>
    </Wrapper>
  );
};

export default ElevatorStatusDisplay;
