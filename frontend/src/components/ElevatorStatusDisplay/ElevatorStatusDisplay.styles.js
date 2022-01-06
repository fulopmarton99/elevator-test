import styled from "styled-components";

export const Wrapper = styled.div`
  // text-align: center;
  display: inline-flex;
  flex-flow: column;
  border: 5px solid grey;
  @media (max-height: 760px) {
    flex-flow: row;
  }
`;

export const LiftName = styled.div`
  width: 30px;
  height: 30px;
  background: green;
  text-align: center;
`;

export const DirectionDisplay = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ direction }) =>
    direction === "true" ? "Aquamarine" : "DeepSkyBlue"};
`;
