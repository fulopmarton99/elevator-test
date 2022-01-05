import React from "react";

import { Wrapper, CallButton } from "./ElevatorCallButton.styles";

const onClickPrototype = ({ level, direction }) => {
  return () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ direction: direction }),
    };
    console.log("FETCHING " + level);
    fetch(`http://localhost:3030/api/floors/${level}`, requestOptions)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching floor " + level);
      });
  };
};

const ElevatorCallButton = ({ level }) => {
  return (
    <Wrapper>
      <CallButton onClick={onClickPrototype({ level, direction: "up" })}>
        ^
      </CallButton>
      <br></br>
      <CallButton onClick={onClickPrototype({ level, direction: "down" })}>
        v
      </CallButton>
    </Wrapper>
  );
};

export default ElevatorCallButton;
