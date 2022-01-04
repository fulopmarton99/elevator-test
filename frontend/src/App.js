import "./App.css";

import Elevator from "./components/Elevator";
import SevenSegment from "./components/SevenSegment";

import Keypad from "./components/Keypad";
import ElevatorCallButton from "./components/ElevatorCallButton";
import Floor from "./components/Floor";

function App() {
  return <ElevatorCallButton></ElevatorCallButton>;
  // <Floor level={0}></Floor>;

  // return (
  //   <div>
  //     <Elevator floor={0}></Elevator>
  //     <Elevator floor={6}></Elevator>
  //   </div>
  // );
  // return (
  //   <div>
  //     <Keypad></Keypad>
  //     {/* <Keypad></Keypad> */}
  //   </div>
  // );
  // return (
  //   <div>
  //     <Elevator floor={3}></Elevator>
  //   </div>
  // );
  // return <SevenSegment value={9}></SevenSegment>;
}

export default App;
