import React from "react";

import { Wrapper, Segment } from "./SevenSegment.styles";

const digits = [];
digits[0] = [1, 1, 1, 1, 1, 1, 0];
digits[1] = [0, 1, 1, 0, 0, 0, 0];
digits[2] = [1, 1, 0, 1, 1, 0, 1];
digits[3] = [1, 1, 1, 1, 0, 0, 1];
digits[4] = [0, 1, 1, 0, 0, 1, 1];
digits[5] = [1, 0, 1, 1, 0, 1, 1];
digits[6] = [1, 0, 1, 1, 1, 1, 1];
digits[7] = [1, 1, 1, 0, 0, 0, 0];
digits[8] = [1, 1, 1, 1, 1, 1, 1];
digits[9] = [1, 1, 1, 1, 0, 1, 1];
const segmentpositions = [
  [0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1],
  [2, 1, 1, 2, 1],
  [3, 2, 0, 2, 1],
  [4, 1, 0, 2, 0],
  [5, 0, 0, 1, 0],
  [6, 1, 0, 1, 1],
];

const SevenSegment = ({ value }) => {
  return (
    <Wrapper>
      {segmentpositions.map(([id, x1, y1, x2, y2]) => {
        return (
          <Segment
            key={id}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            active={digits[value][id] === 1}
          ></Segment>
        );
      })}
    </Wrapper>
  );
  // return <Segment active={active} row={row} col = {col}></Segment>;
};

export default SevenSegment;
