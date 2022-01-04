import React from "react";

import { Wrapper, CallButton } from "./ElevatorCallButton.styles";

const ElevatorCallButton = () => {
  return (
    <Wrapper>
      <CallButton>^</CallButton>
      <br></br>
      <CallButton>v</CallButton>
    </Wrapper>
  );
};

export default ElevatorCallButton;
