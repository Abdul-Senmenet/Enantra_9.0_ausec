import React, { useEffect } from 'react';
import "./FlipClock.css";

const FlipClock = ({ targetDate }) => {
  const getTimeSegmentElements = (segmentElement) => {
    const segmentDisplay = segmentElement.querySelector('.segment-display');
    const segmentDisplayTop = segmentDisplay.querySelector('.segment-display__top');
    const segmentDisplayBottom = segmentDisplay.querySelector('.segment-display__bottom');

    const segmentOverlay = segmentDisplay.querySelector('.segment-overlay');
    const segmentOverlayTop = segmentOverlay.querySelector('.segment-overlay__top');
    const segmentOverlayBottom = segmentOverlay.querySelector('.segment-overlay__bottom');

    return {
      segmentDisplayTop,
      segmentDisplayBottom,
      segmentOverlay,
      segmentOverlayTop,
      segmentOverlayBottom,
    };
  };

  const updateSegmentValues = (displayElement, overlayElement, value) => {
    displayElement.textContent = value;
    overlayElement.textContent = value;
  };

  const updateTimeSegment = (segmentElement, timeValue) => {
    const segmentElements = getTimeSegmentElements(segmentElement);

    if (parseInt(segmentElements.segmentDisplayTop.textContent, 10) === timeValue) {
      return;
    }

    segmentElements.segmentOverlay.classList.add('flip');

    updateSegmentValues(
      segmentElements.segmentDisplayTop,
      segmentElements.segmentOverlayBottom,
      timeValue
    );

    const finishAnimation = () => {
      segmentElements.segmentOverlay.classList.remove('flip');
      updateSegmentValues(
        segmentElements.segmentDisplayBottom,
        segmentElements.segmentOverlayTop,
        timeValue
      );

      segmentElements.segmentOverlay.removeEventListener('animationend', finishAnimation);
    };

    segmentElements.segmentOverlay.addEventListener('animationend', finishAnimation);
  };

  const updateTimeSection = (sectionID, timeValue) => {
    const firstNumber = Math.floor(timeValue / 10) || 0;
    const secondNumber = timeValue % 10 || 0;
    const sectionElement = document.getElementById(sectionID);
    const timeSegments = sectionElement.querySelectorAll('.time-segment');

    updateTimeSegment(timeSegments[0], firstNumber);
    updateTimeSegment(timeSegments[1], secondNumber);
  };

  const getTimeRemaining = (targetDateTime) => {
    const nowTime = Date.now();
    const complete = nowTime >= targetDateTime;

    if (complete) {
      return {
        complete,
        seconds: 0,
        minutes: 0,
        hours: 0,
      };
    }

    const secondsRemaining = Math.floor((targetDateTime - nowTime) / 1000);
    const hours = Math.floor(secondsRemaining / 60 / 60);
    const minutes = Math.floor(secondsRemaining / 60) - hours * 60;
    const seconds = secondsRemaining % 60;

    return {
      complete,
      seconds,
      minutes,
      hours,
    };
  };

  const updateAllSegments = () => {
    const timeRemainingBits = getTimeRemaining(new Date(targetDate).getTime());

    updateTimeSection('seconds', timeRemainingBits.seconds);
    updateTimeSection('minutes', timeRemainingBits.minutes);
    updateTimeSection('hours', timeRemainingBits.hours);

    return timeRemainingBits.complete;
  };

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      const isComplete = updateAllSegments();

      if (isComplete) {
        clearInterval(countdownTimer);
      }
    }, 1000);

    updateAllSegments();

    return () => clearInterval(countdownTimer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div className="time-section" id="hours">
        <div className="time-group">
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <p>Hours</p>
      </div>

      <div className="time-section" id="minutes">
        <div className="time-group">
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <p>Minutes</p>
      </div>

      <div className="time-section" id="seconds">
        <div className="time-group">
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
          <div className="time-segment">
            <div className="segment-display">
              <div className="segment-display__top"></div>
              <div className="segment-display__bottom"></div>
              <div className="segment-overlay">
                <div className="segment-overlay__top"></div>
                <div className="segment-overlay__bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default FlipClock;
