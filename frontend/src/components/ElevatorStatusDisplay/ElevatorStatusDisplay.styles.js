import styled from "styled-components";

export const Wrapper = styled.div`
  width: 20px;
  text-align: center;
`;

export const LiftName = styled.div`
  background: green;
`;

export const DirectionDisplay = styled.div`
  background: ${({ direction }) =>
    direction === "true" ? "Aquamarine" : "DeepSkyBlue"};
`;
