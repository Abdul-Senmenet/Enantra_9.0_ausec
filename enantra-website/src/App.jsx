import React from "react";
import FlipClock from "./components/flipClock";
import Test from "./test";
import SlidingCard from "./SlidingCard";
import Aizen from './assets/aizen.jpg';
import Erwin from './assets/erwin.jpg';
import BlobAnimation from "./BlobAnimation";
import MouseTracker from "./MouseTracker";
// import Roller from "./Roller";

const App = () => {
  // Set the target date (5 hours from now as an example)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 5);

  const slides = [
    { title: "Slide 1", content: "Content for Slide 1", image: Aizen ,link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
    { title: "Slide 2", content: "Content for Slide 2", image: Erwin ,link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
    { title: "Slide 3", content: "Content for Slide 3", image: "C:\Users\USER\Downloads\aizen.png" ,link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
    { title: "Slide 4", content: "Content for Slide 4", image: "C:\Users\USER\Downloads\aizen.png" ,link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
    { title: "Slide 5", content: "Content for Slide 5", image: "C:\Users\USER\Downloads\aizen.png" ,link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
  ];

  return (
    <div>
        <BlobAnimation>
            {/* <Slider /> */}
            <MouseTracker />
            <Test />
            <FlipClock targetDate={targetDate} />
            <SlidingCard slides={slides} />
        </BlobAnimation>      
    </div>
  );
};

export default App;
