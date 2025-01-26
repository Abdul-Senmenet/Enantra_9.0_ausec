import React from 'react';
import FlipClock from './flipClock';

const App = () => {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 1); // Countdown to 1 hour from now

  return (
    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl font-bold mb-8">Flip Clock Countdown</h1>
      <FlipClock targetDate={targetDate} />
    </div>
  );
};

export default App;
