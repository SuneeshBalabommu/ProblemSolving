import React, { useState, useEffect } from "react";

const ProgressBarWithFill = () => {
    const [bar, setBar] = useState(0);
    const progressBarSpeed= Math.random() * (800) + 100; // Random speed between 1 and 100

  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prevBar) => {
        if (prevBar >= 100) {
          clearInterval(interval);
        }
        return Math.min(prevBar + 1, 100);
      });
    }, progressBarSpeed);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="Progress-bar-fill">
      <div
        className="Progress-bar-fill-filler "
        style={{ transform: `translateX(${bar - 100}%)` }}
        role="progressbar"
        aria-valuenow={bar}
        aria-valuemin="0"
        aria-valuemax="100"
      >
      </div>
        <span className="Progress-text">{bar}%</span>
    </div>
  );
};

export default ProgressBarWithFill;
