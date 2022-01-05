import React from "react";

import { Wrapper } from "./Floor.styles";

import ElevatorCallButton from "../ElevatorCallButton";
import Elevator from "../Elevator";

const Floor = ({ level }) => {
  return (
    <Wrapper>
      <h1
        style={{
          margin: 10,
        }}
      >
        {level}
      </h1>
      <ElevatorCallButton level = {level}></ElevatorCallButton>
    </Wrapper>
  );
};

export default Floor;
