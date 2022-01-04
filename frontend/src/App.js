import "./App.css";

import Elevator from "./components/Elevator";
import SevenSegment from "./components/SevenSegment";

import Keypad from "./components/Keypad";

function App() {
  // return <Elevator floor={1}></Elevator>;
  return <Keypad></Keypad>;
  // return (
  //   <div>
  //     <Elevator floor={3}></Elevator>
  //   </div>
  // );
  // return <SevenSegment value={9}></SevenSegment>;
}

export default App;
