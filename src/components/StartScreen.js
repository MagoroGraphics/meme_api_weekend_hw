import React from "react";
import styled from "styled-components";

//#region Styled Components
const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 5vh;
`;

const StyledButton = styled.button`
  background-color: #de27b1;
  max-width: 10vh;
  color: white;
  font-weight: bold;
  padding: 2vh;
  border-radius: 2vh;
  border-style: none;
  -webkit-box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
  -moz-box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
  box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5vh;
`;

const StyledTextBox = styled.input`
  border-radius: 1vh;
  border-style: none;
  background-color: azure;
  width: 10vw;
  height: 3vh;
  padding: 1vh;
`;

const MainStartScreenWrapper = styled.div`
width: 100vw;
height:100vh;
  background: radial-gradient(
        circle,
        transparent 20%,
        #ffa2ce 20%,
        #ffa2ce 80%,
        transparent 80%,
        transparent
      )
      0% 0% / 64px 64px,
    radial-gradient(
        circle,
        transparent 20%,
        #ffa2ce 20%,
        #ffa2ce 80%,
        transparent 80%,
        transparent
      )
      32px 32px / 64px 64px,
    linear-gradient(#ffca47 7px, transparent 7px) 0px -3.5px / 32px 32px,
    linear-gradient(90deg, #ffca47 7px, #ffa2ce 7px) -3.5px 0px / 32px 32px #ffa2ce;
  background-color: #ffa2ce;
`;
//#endregion

const StartScreen = ({ setQuizzState, setUserName, getAllCorrectAnswers }) => {
  const handleNameOnChange = (e) => {
    setUserName(e.target.value);
  };

  const handleQuizzStart = () => {
    setQuizzState("Quizz");
    getAllCorrectAnswers();
  };

  return (
    <MainStartScreenWrapper>
      <StyledFormWrapper>
        <h3>What's your name?</h3>
        <form>
          <StyledTextBox
            type="text"
            onChange={handleNameOnChange}
            placeholder="Your name here"
          />
        </form>
        <ButtonWrapper>
          <StyledButton onClick={handleQuizzStart}>Start Quizz</StyledButton>
        </ButtonWrapper>
      </StyledFormWrapper>
    </MainStartScreenWrapper>
  );
};

export default StartScreen;
