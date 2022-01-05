import styled from "styled-components";

import SevenSegment from "../SevenSegment";

export const Wrapper = styled.div`
  background: lightblue;
  width: 200px;
  height: 120px;
  border: 5px solid grey;
  position: absolute;
  transform: translate(100%, ${({ position }) => {
    return (1 + Number(position)) * -100;
  }}%);
  display: flex;
  flex-direction: row;
  flex-flow column wrap;
  overflow: hidden;

  // flex-shrink: 0;
`;
export const FloorDisplay = SevenSegment;
