import styled, { css, keyframes } from "styled-components";

import SevenSegment from "../SevenSegment";

const elevatorMoveAnimation = ({ order, position, destination }) => {
  return keyframes`
  0% {
    transform: translate(${(order + 1) * 100}%, -${
    (1 + Number(position)) * 100
  }%);
  }
  100%{
    transform: translate(${(order + 1) * 100}%, -${
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
  height: 120px;
  border: 5px solid grey;
  position: absolute;

  display: flex;
  flex-direction: row;
  flex-flow column wrap;
  overflow: hidden;
  transform: translate(${({ order }) => (1 + Number(order)) * 100}%, ${({
  destination,
}) => {
  return (1 + Number(destination)) * -100;
}}%);
  animation: ${moveElevator};


`;
export const FloorDisplay = SevenSegment;
