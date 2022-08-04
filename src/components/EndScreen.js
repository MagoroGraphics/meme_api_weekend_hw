import React from "react";
import styled from "styled-components";

const EndScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RestartButton = styled.button`
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
  cursor: pointer;
`

const EndScreen = ({
  setQuestionNum,
  setQuizzState,
  score,
  setScore,
  userName,
}) => {
  const handleOnClick = () => {
    setQuestionNum(0);
    setQuizzState("Start Screen");
    setScore(0);
  };

  return (
    <EndScreenWrapper>
      <ContentWrapper>
        <h1>
          Congrats {userName}! Your Score is: {score} / 100{" "}
        </h1>
        <RestartButton onClick={handleOnClick}>Restart Test</RestartButton>
      </ContentWrapper>
    </EndScreenWrapper>
  );
};

export default EndScreen;
