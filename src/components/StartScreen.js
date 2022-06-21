import React from "react";

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
            <h3>What's your name?</h3>
            <form>
                <input 
                type="text" 
                onChange={handleNameOnChange} 
                placeholder='Your name here' 
                />
            </form>
            <button 
            onClick={handleQuizzStart} 
            >
                Start Quizz
            </button>
        </div>
    )
}

export default StartScreen