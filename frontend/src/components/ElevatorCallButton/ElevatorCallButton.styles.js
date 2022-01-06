import styled from "styled-components";

export const Wrapper = styled.div`
  background: red;
  display: inline-flex;
  flex-flow: column;
  @media (max-height: 600px) {
    flex-flow: row;
  }
`;

export const CallButton = styled.button`
  vertical-align: top;
  width: 40px;
`;
