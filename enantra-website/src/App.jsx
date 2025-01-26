import React from "react";
import FlipClock from "./flipClock";
// import "./App.css"; // Optional: Use this if you want specific app-wide styles

const App = () => {
  // Set the target date (5 hours from now as an example)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 5);

  return (
    <div className="app">
      <h1 className="title">React Flip Clock Countdown</h1>
      <FlipClock targetDate={targetDate} />
    </div>
  );
};

export default App;
