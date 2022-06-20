import React from "react";

const StartScreen = ({setQuizzState, setUserName}) => {

    const handleNameOnChange = (e) => {
        setUserName(e.target.value)
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
            onClick={()=>{setQuizzState("Quizz")}} 
            >
                Start Quizz
            </button>
        </div>
    )
}

export default StartScreen