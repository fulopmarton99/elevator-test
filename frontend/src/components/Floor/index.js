import React from "react";

import { Wrapper, StatusWrapper } from "./Floor.styles";

import ElevatorCallButton from "../ElevatorCallButton";

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
      <StatusWrapper>
        <ElevatorStatusDisplay
          elevatorName="A"
          direction={elevatorDirectionA}
        ></ElevatorStatusDisplay>
        <ElevatorStatusDisplay
          elevatorName="B"
          direction={elevatorDirectionB}
        ></ElevatorStatusDisplay>
      </StatusWrapper>
    </Wrapper>
  );
};

export default Floor;
