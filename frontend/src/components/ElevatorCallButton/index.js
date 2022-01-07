import React from "react";

import { Wrapper, CallButton } from "./ElevatorCallButton.styles";

import upArrow from "../../svgs/arrow-up-solid.svg";
import downArrow from "../../svgs/arrow-down-solid.svg";

import { apiHost } from "../../App";

const onClickPrototype = ({ level, direction }) => {
  return () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ direction: direction }),
    };
    fetch(`${apiHost}/api/floors/${level}`, requestOptions)
      .then((response) => {
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
        <img src={upArrow} alt="Call elevator up"></img>
      </CallButton>

      <CallButton onClick={onClickPrototype({ level, direction: "down" })}>
        <img src={downArrow} alt="Call elevator down"></img>
      </CallButton>
    </Wrapper>
  );
};

export default ElevatorCallButton;
