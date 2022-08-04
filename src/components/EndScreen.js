import React from "react";

const EndScreen = ({
    setQuestionNum, 
    setQuizzState
}) => {

    const handleOnClick = () => {
        setQuestionNum(0)
        setQuizzState("Start Screen")
    }

    return(
        <>
            <h1>Congrats! Your Score is: </h1>
            <button onClick={handleOnClick} >Restart Test</button>
        </>
    )
        
}

export default EndScreen