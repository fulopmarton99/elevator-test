import styled from "styled-components";

export const Wrapper = styled.div``;

export const LiftName = styled.div`
  background: green;
`;

export const DirectionDisplay = styled.div`
  background: ${({ direction }) =>
    direction === "true" ? "Aquamarine" : "DeepSkyBlue"};
`;
