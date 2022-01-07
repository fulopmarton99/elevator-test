import React from "react";

import { Wrapper, Button } from "./Keypad.styles";

import { apiHost } from "../../App";

const onClickPrototype = (elevatorId, targetFloor) => {
  return () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `${apiHost}/api/elevators/${elevatorId}/${targetFloor}`,
      requestOptions
    )
      .then((response) => {
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
        <tbody>
          {[0, 3, 6].map((lineStart) => {
            return (
              <tr key={lineStart}>
                {[1, 2, 3].map((lineItem) => {
                  const val = lineStart + lineItem;
                  return (
                    <td key={val}>
                      <Button onClick={onClickPrototype(elevatorId, val)}>
                        {val}
                      </Button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td>
              <Button key={0} onClick={onClickPrototype(elevatorId, 0)}>
                0
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Keypad;
