import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  //   setTimeout(() => {
  //     onTimeout();
  //   }, timeout);

  //   setTimeout(onTimeout, timeout);

  useEffect(() => {
    console.log("Setting Timeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  //update progressbar
  //   setInterval(() => {
  //     setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
  //   }, 100); //shift this code in useEffect becoz can go in infinite loop

  useEffect(() => {
    console.log("Setting Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <div>
      <progress id="question-time" max={timeout} value={remainingTime} className={mode} />
    </div>
  );
};

export default QuestionTimer;

//go in quiz.jsx
