import React from "react";

import { Wrapper, Button } from "./Keypad.styles";

const Keypad = () => {
  return (
    <Wrapper>
      {[1, 2, 3].map((val) => {
        return <Button key={val}>{val}</Button>;
      })}
      <br></br>
      {[4, 5, 6].map((val) => {
        return <Button key={val}>{val}</Button>;
      })}
      <br></br>
      {[7, 8, 9].map((val) => {
        return <Button key={val}>{val}</Button>;
      })}
      <br></br>
      {/* <Button key={-1} style={{ display: "none" }}>
        0
      </Button> */}
      <Button
        key={0}
        style={{
          transform: "translate(100%, 0)",
        }}
      >
        0
      </Button>
    </Wrapper>
  );
};

export default Keypad;
