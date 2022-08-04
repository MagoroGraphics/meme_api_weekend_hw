import React, { useState, useEffect } from "react";
import TestContainer from "./TestContainer";
import StartScreen from "../components/StartScreen.js";
import EndScreen from "../components/EndScreen";

const MemeTestBox = ({
  userName,
  setUserName,
  getCurrentCorrectAnswer,
  fullQuiz,
  questionNum,
  setQuestionNum,
  getAllCorrectAnswers,
  allCorrectAnswers,
  score,
  setScore,
}) => {
  const [userChoice, setUserChoice] = useState("");
  const [quizzState, setQuizzState] = useState("Start Screen");

  return (
    <main>
      <header>
        <section id="title">
          <h1>MEME KNOWLEDGE TEST</h1>
          <h2>Hi {userName}! How well do you know your memes?</h2>
        </section>
        <section>
          <h2>Score: {score}</h2>
        </section>
      </header>
      <section>
        {quizzState === "Start Screen" && (
          <StartScreen
            setQuizzState={setQuizzState}
            setUserName={setUserName}
            getAllCorrectAnswers={getAllCorrectAnswers}
          />
        )}

        {quizzState === "Quizz" && (
          <TestContainer
            userChoice={setUserChoice}
            getCurrentCorrectAnswer={getCurrentCorrectAnswer}
            fullQuiz={fullQuiz}
            questionNum={questionNum}
            setQuizzState={setQuizzState}
            setQuestionNum={setQuestionNum}
            getAllCorrectAnswers={getAllCorrectAnswers}
            allCorrectAnswers={allCorrectAnswers}
            score={score}
            setScore={setScore}
          />
        )}

        {quizzState === "End Screen" && (
          <EndScreen
            setQuestionNum={setQuestionNum}
            setQuizzState={setQuizzState}
            score={score}
            setScore={setScore}
            userName={userName}
          />
        )}
      </section>
    </main>
  );
};

export default MemeTestBox;
