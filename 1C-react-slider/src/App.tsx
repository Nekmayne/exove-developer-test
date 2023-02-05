import React, { useState, useEffect } from "react";
import "./App.css";

const Slider: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const [showValue, setShowValue] = useState<boolean>(false);

  // Handle the slider change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
    setShowValue(false);
  };

  // Display value after a delay
  useEffect(() => {
    let timeout: number | undefined;

    // Sets slider value to true after 500ms timeout
    timeout = window.setTimeout(() => {
      setShowValue(true);
    }, 500);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [value]);

  // Calculate the shown percentage value
  const percentage = (value / 100) * 100;

  return (
    <div className="container">
      <div>
        <input type="range" value={value} onChange={handleChange} />
        {showValue && <div>{percentage.toFixed()}%</div>}
      </div>
    </div>
  );
};

export default Slider;
