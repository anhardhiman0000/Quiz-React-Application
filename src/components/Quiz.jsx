// import React, { useCallback, useRef, useState } from "react";
import React, { useCallback, useState } from "react";

// import QuestionTimer from "./QuestionTimer";
// import Answers from "./Answers";
import Question from "./Question";
import Summary from "./Summary";

import QUESTIONS from "../question";

// import quizCompleteImg from "../assets/quiz-complete.png";

//here we show currently active que, & when user give ans we shift to next que.
const Quiz = () => {
  //   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  //   const [answerState, setAnswerState] = useState("");

  //  const shuffledAnswers = useRef(); //Move to Answer.jsx

  //  Derived state
  //   const activeQuestionIndex =
  //     answerState === "" ? userAnswers.length : userAnswers.length - 1; //now questionindex not move after ans selected make stick to old que.
  const activeQuestionIndex = userAnswers.length;

  //   shuffle the answers
  //   const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  //   shuffledAnswers.sort(() => Math.random() - 0.5); //Math.random() give us value b/w 0 & 1 & we deduct 0.5 from thatwe will end up with the negative value in 50 of 100 cases, or with the positive value, & that should therefore shuffle those answers.

  //   computed value [after finishing quiz app should not crash]
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length; //activeQuestionIndex === QUESTIONS.length; by this we make sure can't be exceed by the number of ques

  //   function handleSelectAnswer(selectedAnswer) {
  //     setUserAnswers((prevUserAnswers) => {
  //       return [...prevUserAnswers, selectedAnswer];
  //     });
  //   }

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      //   setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      //   //For colored the button after select
      //   setTimeout(() => {
      //     if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
      //       setAnswerState("correct");
      //     } else {
      //       setAnswerState("wrong");
      //     }

      //     //empty string resetting
      //     setTimeout(() => {
      //       setAnswerState("");
      //     }, 2000);
      //   }, 1000);
    },
    // [activeQuestionIndex]
    []
  );

  //progress bar stop <Fixed but still error>
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  //display after quiz complete
  if (quizIsComplete) {
    return (
      //   <div id="summary">
      //     <img src={quizCompleteImg} alt="Trophy Icon" />
      //     <h2>Quiz Completed!</h2>
      //   </div> //move to summary.jsx
      <Summary userAnswers={userAnswers} />
    );
  }

  // //  Shuffle answer come after this.
  //   const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  //   shuffledAnswers.sort(() => Math.random() - 0.5);

  //   shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
  //   shuffledAnswers.current.sort(() => Math.random() - 0.5);

  //   //not shuffling anymore
  //   if (!shuffledAnswers.current) {
  //     shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
  //     shuffledAnswers.current.sort(() => Math.random() - 0.5);
  //   } //Move in Answer.jsx

  return (
    <div id="quiz">
      {/* <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          //   onTimeout={() => handleSelectAnswer(null)}
          onTimeout={handleSkipAnswer}
        />*/}

      {/* <p>Currently Active Questions</p> */}
      {/* <h2>{QUESTIONS[activeQuestionIndex].text}</h2> */}

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

      {/* <Answers
          key={activeQuestionIndex} //added for the shuffling
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div> */}
      {/* move to Question.jsx */}

      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        // questionText={QUESTIONS[activeQuestionIndex].text}
        // answers={QUESTIONS[activeQuestionIndex].answers}
        // answerState={answerState}
        // selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
