import React, { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  //Answers Shuffling logic.
  if (!shuffledAnswers.current) {
    // shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      <ul id="answers">
        {/* {QUESTIONS[activeQuestionIndex].answers.map((answer) => ( */}
        {/* {shuffledAnswers.map((answer) => { */}
        {shuffledAnswers.current.map((answer) => {
          //Styling aading for color of selected ans.

          //   const isSelected = userAnswers[userAnswers.length - 1] === answer;
          const isSelected = selectedAnswer === answer;
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
              {/* <button onClick={handleSelectAnswer}>{answer}</button> */}
              <button
                // onClick={() => handleSelectAnswer(answer)}
                onClick={() => onSelect(answer)}
                className={cssClass}
                disabled={answerState !== ''}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answers;
