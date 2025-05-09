import React, { useState, useEffect } from "react";

const ProgressBarWithFill = () => {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prevBar) => {
        if (prevBar >= 100) {
          clearInterval(interval);
        }
        return Math.min(prevBar + 1, 100);
      });
    }, 500);
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
        {/* <span className="Progress-text">{bar}%</span> */}
      </div>
    </div>
  );
};

export default ProgressBarWithFill;
