import React from "react";
import styled from 'styled-components';

const StyledFormWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5vh;

`

const StyledButton = styled.button`
    background-color: #de27b1;
    max-width: 10vh;
    color:white;
    font-weight: bold;
    padding:2vh;
    border-radius: 2vh;
    border-style: none;
    -webkit-box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
    -moz-box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
    box-shadow: 2.5px 4.5px 14.5px -1.5px #898989;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5vh;
`

const StartScreen = ({setQuizzState, setUserName, getCurrentCorrectAnswer}) => {

    const handleNameOnChange = (e) => {
        setUserName(e.target.value)
    }

    const handleQuizzStart = () => {
        setQuizzState("Quizz")
        getCurrentCorrectAnswer()
    }

    return (
        <div>
            <StyledFormWrapper>
                <h3>What's your name?</h3>
                <form>
                    <input 
                    type="text" 
                    onChange={handleNameOnChange} 
                    placeholder='Your name here' 
                    />
                </form>
                <ButtonWrapper>
                    <StyledButton 
                    onClick={handleQuizzStart} 
                    >
                        Start Quizz
                    </StyledButton>
                </ButtonWrapper>
            </StyledFormWrapper>
        </div>
    )
}

export default StartScreen