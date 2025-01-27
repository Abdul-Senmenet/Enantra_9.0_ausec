import React from "react";
import FlipClock from "./components/flipClock";
import Test from "./test";
// import "./App.css"; // Optional: Use this if you want specific app-wide styles

const App = () => {
  // Set the target date (5 hours from now as an example)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 5);

  return (
    <div>
        <div>
            <Test />
        </div>
        <div className="app">
            <FlipClock targetDate={targetDate} />
        </div>
    </div>
  );
};

export default App;
