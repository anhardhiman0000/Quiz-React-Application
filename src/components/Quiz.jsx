import React, { useCallback, useState } from "react";

import Question from "./Question";
import Summary from "./Summary";

import QUESTIONS from "../question";

//here we show currently active que, & when user give ans we shift to next que.
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  //   computed value [after finishing quiz app should not crash]
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length; //activeQuestionIndex === QUESTIONS.length; by this we make sure can't be exceed by the number of ques

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  //progress bar stop <Fixed but still error>
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  //display after quiz complete
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
