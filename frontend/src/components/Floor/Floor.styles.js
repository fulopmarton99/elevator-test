import styled from "styled-components";

export const Wrapper = styled.div`
  background: red;
  border: 5px solid green;
  width: 400px;
  height: ${100 / 7}%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  box-sizing: border-box;
  @media (max-height: 630px) {
    height: ${630 / 7}px;
  }
`;

export const StatusWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-height: 760px) {
    flex-direction: column;
  }
`;
