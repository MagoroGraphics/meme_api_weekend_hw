import React, { useState } from "react";
import MemeTest from "../components/MemeTest";
import MemeTestImage from "../components/MemeTestImage";
import styled from "styled-components";

//#region Styled Components
const TestWrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const MemeImage = styled.img`
  padding: 2vh;
  border-radius: 3vh;
  max-width: 20vw;
  max-height: 20vh;
`;

const FormWrapper = styled.div`
  padding: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButton = styled.button`
  background-color: yellow;
  font-weight: bold;
  border-radius: 2vh;
  border-style: none;
  font-size: 2vh;
  padding: 2vh;
  margin: 3vh;
  -webkit-box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
  -moz-box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
  box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
  &:hover {
    background-color: magenta;
  }
`;
//#endregion

const TestContainer = ({
  memes,
  currentFiveMemes,
  currentCorrectAnswer,
  setMultiChoice,
  setUserSubmission,
  getFiveRandomMemes,
  getCurrentCorrectAnswer,
  fullQuiz,
  questionNum,
  setQuizzState,
  setQuestionNum,
  allCorrectAnswers,
  score,
  setScore,
}) => {
  const [userSelection, setUserSelection] = useState({});

  const handleUserSelection = (e) => {
    setUserSelection(e.target.value);
    console.log("This is the userSelection", userSelection["name"])
  };

  const multipleChoice = fullQuiz[questionNum].map((meme, index) => {
    return (
      <li key={index}>
        <label>
        <input type="radio" name="quizz" value={meme["name"]} onClick={handleUserSelection} />
        {meme["name"]}</label>
      </li>
    );
  });

  const handleOnClickSubmit = (e) => {
    e.preventDefault();
    questionNum < 9
      ? setQuestionNum(questionNum + 1)
      : setQuizzState("End Screen");
    getCurrentCorrectAnswer();
    if (userSelection === allCorrectAnswers[questionNum]["name"]) {
      setScore(score + 10);
    }
    console.log("This is the userSelection: ", userSelection);
    console.log(
      "This is the current answer: ",
      allCorrectAnswers[questionNum]["name"],
      "by questionNum: ",
      questionNum
    );
  };

  return (
    <TestWrapper id="memetest">
      <MemeImage src={allCorrectAnswers[questionNum]["url"]} alt="meme" />
      <FormWrapper>
        <form>
          {multipleChoice}
          <StyledButton type="submit" onClick={handleOnClickSubmit}>
            Next
          </StyledButton>
        </form>
      </FormWrapper>
    </TestWrapper>
  );
};

export default TestContainer;
