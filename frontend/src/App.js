import logo from "./logo.svg";
import "./App.css";

import Elevator from "./components/Elevator";
import SevenSegment from "./components/SevenSegment";
function App() {
  // return <Elevator floor={1}></Elevator>;
  return (
    <div>
      {[...Array(10).keys()].map((v) => (
        <SevenSegment value={v}></SevenSegment>
      ))}
    </div>
  );
  return <SevenSegment value={9}></SevenSegment>;
}

export default App;
