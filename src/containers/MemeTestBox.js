import React, {useState, useEffect} from "react";
import TestContainer from "./TestContainer";
import StartScreen from '../components/StartScreen.js'


const MemeTestBox = ({
    memes, 
    setUserName, 
    currentCorrectAnswer,
    getCurrentCorrectAnswer
}) => {

    const [score, setScore] = useState(0)
    const [userChoice, setUserChoice] = useState('')
    const [multiChoiceAnswers, setMultiChoiceAnswers] = useState([])
    const [usersubmission, setUserSubmission] = useState("")
    const [randomizedQuizz, setRandomizedQuizz] = useState([])
    const [quizzState, setQuizzState] = useState("Start Screen")


    return(
        <main>
            <header>
                <section id="title">
                    <h1>MEME KNOWLEDGE TEST</h1>
                    <h2>How well do you know your memes?</h2>
                </section>
                <section>
                    <h2>Score: {score}</h2>
                </section>
            </header>
            <section>
                {quizzState === "Start Screen" && <StartScreen 
                setQuizzState = {setQuizzState}
                setUserName = {setUserName}
                />}
                {quizzState === "Quizz" && <TestContainer 
                memes={memes} 
                userChoice={setUserChoice} 
                setMultiChoice={setMultiChoiceAnswers} 
                setUserSubmission={setUserSubmission}
                />}
            </section>
        </main>
    )
}

export default MemeTestBox