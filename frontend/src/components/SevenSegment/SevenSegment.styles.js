import styled from "styled-components";

export const Wrapper = styled.div`
  background: black;
  width: 50px;
  height: 50px;
  position: relative;
  transform: translate(50%, 0%);
`;
export const Segment = styled.div`
  background: ${({ active }) => (active ? "red" : "rgb(59, 0, 0)")};
  width: ${({ x1, y1, x2, y2 }) => {
    return (y2 - y1) * 20 + 3;
  }}px;
  height: ${({ x1, y1, x2, y2 }) => {
    return (x2 - x1) * 20 + 3;
  }}px;
  border-radius: 20px;
  top: ${({ x1 }) => {
    return x1 * 20 + 5;
  }}px;
  left: ${({ y1 }) => {
    return y1 * 20 + 10;
  }}px;
  position: absolute;
`;
