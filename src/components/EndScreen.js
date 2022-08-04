import React from "react";

const EndScreen = ({
    setQuestionNum, 
    setQuizzState,
    score,
    setScore,
    userName
}) => {

    const handleOnClick = () => {
        setQuestionNum(0)
        setQuizzState("Start Screen")
        setScore(0)
    }

    return(
        <>
            <h1>Congrats {userName}! Your Score is: {score} / 100 </h1>
            <button onClick={handleOnClick} >Restart Test</button>
        </>
    )
        
}

export default EndScreen