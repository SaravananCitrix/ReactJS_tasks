import { useState } from "react";
import "./App.css";

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  function reset() {
    setRed(0);
    setGreen(0);
    setBlue(0);
  }
  return (
    <>
      <button className="reset" onClick={reset}>
        Reset
      </button>
      <div className="container">
        <div className="buttons">
          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => setRed(red + 1)}
          >
            Click Red!
          </button>
          <button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => setGreen(green + 1)}
          >
            Click Green!
          </button>
          <button
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={() => setBlue(blue + 1)}
          >
            Click Blue!
          </button>
        </div>
        <p>Total Red Clicks = {red}</p>
        <p>Total Green Clicks = {green}</p>
        <p>Total Blue Clicks = {blue}</p>
      </div>
    </>
  );
}

export default App;
