import React from "react";

import { Wrapper, Button } from "./Keypad.styles";

const onClickPrototype = (elevatorId, targetFloor) => {
  return () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `http://localhost:3030/api/elevators/${elevatorId}/${targetFloor}`,
      requestOptions
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error sending elevator to " + targetFloor);
      });
  };
};

const Keypad = ({ elevatorId }) => {
  return (
    <Wrapper>
      <table>
        {[0, 3, 6].map((lineStart) => {
          return (
            <tr key={lineStart}>
              {[1, 2, 3].map((lineItem) => {
                const val = lineStart + lineItem;
                return (
                  <th key={val}>
                    <Button onClick={onClickPrototype(elevatorId, val)}>
                      {val}
                    </Button>
                  </th>
                );
              })}
            </tr>
          );
        })}
        <tr>
          <th></th>
          <th>
            <Button key={0} onClick={onClickPrototype(elevatorId, 0)}>
              0
            </Button>
          </th>
        </tr>
        
      </table>
    </Wrapper>
  );
};

export default Keypad;
