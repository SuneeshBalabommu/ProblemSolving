import "./App.css";
import ProgressBarWithFill from "./Components/ProgressBarWithFill";
import { useState } from "react";
import ProgressBar from "./Components/ProgressBar";

function App() {
  // const bars = [1, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const [bars, setBars] = useState([]);

  const handleClick = () => {
    setBars([...bars, Date.now()]); 
  };

  return (
    <>
      <div className="Title">Progress Bar</div>
      {/* {bars.map(value => <ProgressBar key={value} progress={value} />)} */}
      <div className="button-container">
        <button onClick={handleClick} className="btn-style">
          Show Progress Bar
        </button>
      </div>
      {bars.map((id) => (
        <ProgressBarWithFill key={id} />
      ))}
    </>
  );
}

export default App;
