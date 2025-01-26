// FlipClock.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FlipClock = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const FlipUnit = ({ value, label }) => {
    return (
      <div className="flex flex-col items-center">
        <motion.div
          className="bg-gray-800 text-white text-3xl font-bold w-16 h-20 flex justify-center items-center rounded-xl shadow-lg"
          key={value}
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          exit={{ rotateX: 90 }}
          transition={{ duration: 0.5 }}
        >
          {value.toString().padStart(2, '0')}
        </motion.div>
        <div className="text-gray-500 text-sm mt-1">{label}</div>
      </div>
    );
  };

  return (
    <div className="flex space-x-4">
      <FlipUnit value={timeLeft.days} label="Days" />
      <FlipUnit value={timeLeft.hours} label="Hours" />
      <FlipUnit value={timeLeft.minutes} label="Minutes" />
      <FlipUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default FlipClock;
