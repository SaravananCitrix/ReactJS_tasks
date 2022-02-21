import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="reset" onClick={() => setCount(0)}>
        Reset
      </button>
      <div className="container">
        <p>{count < 0 ? setCount(0) : count}</p>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)}>Decrease -</button>
          <button onClick={() => setCount(count + 1)}>Increase +</button>
        </div>
      </div>
    </>
  );
}

export default App;
