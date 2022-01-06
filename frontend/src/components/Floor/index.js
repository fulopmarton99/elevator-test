import React from "react";

import { Wrapper } from "./Floor.styles";

import ElevatorCallButton from "../ElevatorCallButton";
import Elevator from "../Elevator";
import ElevatorStatusDisplay from "../ElevatorStatusDisplay";

const Floor = ({ level, elevatorDirectionA, elevatorDirectionB }) => {
  return (
    <Wrapper>
      <h1
        style={{
          margin: 10,
        }}
      >
        {level}
      </h1>
      <ElevatorCallButton level={level}></ElevatorCallButton>
      <ElevatorStatusDisplay
        elevatorName="A"
        direction={elevatorDirectionA}
      ></ElevatorStatusDisplay>
      <ElevatorStatusDisplay
        elevatorName="B"
        direction={elevatorDirectionB}
      ></ElevatorStatusDisplay>
    </Wrapper>
  );
};

export default Floor;
