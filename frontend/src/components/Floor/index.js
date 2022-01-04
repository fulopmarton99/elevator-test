import React from "react";

import { Wrapper, CallButton } from "./Floor.styles";

const Floor = ({ level }) => {
  return (
    <Wrapper>
      <CallButton>^</CallButton>
      <br></br>
      <CallButton>v</CallButton>

    </Wrapper>
  );
};

export default Floor;
