import React from "react";

import { Wrapper, CallButton } from "./ElevatorCallButton.styles";

const onclickPrototype = ({ level, direction }) => {
  return () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ direction: direction }),
    };
    fetch(`http://localhost:3030/api/floors/${level}`, requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
};

const ElevatorCallButton = ({ level }) => {
  return (
    <Wrapper>
      <CallButton onClick={onclickPrototype({ level, direction: "up" })}>
        ^
      </CallButton>
      <br></br>
      <CallButton onClick={onclickPrototype({ level, direction: "down" })}>
        v
      </CallButton>
    </Wrapper>
  );
};

export default ElevatorCallButton;
