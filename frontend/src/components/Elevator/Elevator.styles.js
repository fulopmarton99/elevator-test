import styled, { css, keyframes } from "styled-components";

import SevenSegment from "../SevenSegment";

const elevatorMoveAnimation = ({ order, position, destination }) => {
  return keyframes`
  0% {
    transform: translate(${(order + 2) * 100}%, -${
    (1 + Number(position)) * 100
  }%);
  }
  100%{
    transform: translate(${(order + 2) * 100}%, -${
    (1 + Number(destination)) * 100
  }%);
  }

`;
};

const moveElevator = (props) => css`
  ${elevatorMoveAnimation(props)} ${Math.abs(
    props.position - props.destination
  )}s linear
`;

export const Wrapper = styled.div`
  background: lightblue;
  width: 200px;
  height: ${100 / 7}%;
  border: 5px solid grey;
  position: absolute;
  display: inline-block;

  overflow: hidden;
  box-sizing: border-box;
  transform: translate(
    ${({ order }) => (2 + Number(order)) * 100}%,
    ${({ destination }) => {
      return (1 + Number(destination)) * -100;
    }}%
  );
  animation: ${moveElevator};
  @media (max-height: 350px) {
    height: ${350 / 7}px;
  }
  }
`;
export const FloorDisplay = SevenSegment;
