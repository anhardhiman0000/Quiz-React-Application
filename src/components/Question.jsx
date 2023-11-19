import React, { useState } from "react";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

import QUESTIONS from "../question";

const Question = ({
  // key,   //Reserved key
  index,
  // questionText,
  // answers,
  onSelectAnswer,
  // selectedAnswer,
  // answerState,
  onSkipAnswer,
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  //computed values
  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  } else if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        // isCorrect: true,
        // isCorrect: QUESTIONS[key].answers[0] === answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  // if (answer.selectedAnswer) {
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        // key={activeQuestionIndex}
        key={timer}
        // timeout={10000}
        timeout={timer}
        //   onTimeout={() => handleSelectAnswer(null)}
        // onTimeout={handleSkipAnswer}
        // onTimeout={onSkipAnswer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />

      {/* <p>Currently Active Questions</p> */}
      {/* <h2>{QUESTIONS[activeQuestionIndex].text}</h2> */}
      {/* <h2>{questionText}</h2> */}
      {/* <h2>{QUESTIONS[key].text}</h2> */}
      <h2>{QUESTIONS[index].text}</h2>

      {/* <ul id="answers">
      {/* {QUESTIONS[activeQuestionIndex].answers.map((answer) => ( 
      {/* {shuffledAnswers.map((answer) => { 
      {shuffledAnswers.current.map((answer) => {
        //Styling aading for color of selected ans.

        const isSelected = userAnswers[userAnswers.length - 1] === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState == "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            {/* <button onClick={handleSelectAnswer}>{answer}</button> 
            <button
              onClick={() => handleSelectAnswer(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul> */}
      {/* move to Answers.jsx */}
      <Answers
        // key={activeQuestionIndex} //added for the shuffling
        // answers={QUESTIONS[activeQuestionIndex].answers}
        // answers={answers}
        // answers={QUESTIONS[key].answers}
        answers={QUESTIONS[index].answers}
        // selectedAnswer={userAnswers[userAnswers.length - 1]}
        // selectedAnswer={selectedAnswer}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        // onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
