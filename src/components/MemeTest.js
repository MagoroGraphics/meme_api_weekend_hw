import React,{useState} from "react";
import AnswerItem from "./AnswerItem";

const MemeTest = ({possibleAnswers, handleScore, handleSubmit, setUserSubmission}) => {


    const randomizeAnswers = () => {
        let randomizedAnswers = []
        let possibleAnswersCopy = [...possibleAnswers]

            while(possibleAnswersCopy.length > 0){
                let randomIndex = Math.floor(Math.random() * possibleAnswersCopy.length)
                let optionalAnswer = possibleAnswersCopy[randomIndex]
                possibleAnswersCopy.splice(randomIndex,1)
                randomizedAnswers.push(<AnswerItem answer={optionalAnswer} key={optionalAnswer}/>)
                
        }
        return (
            randomizedAnswers
        )
    }

    const answers = randomizeAnswers()


    return (
        <div>
            
            <section id="test">
            <h2>What is the name of this meme?</h2>
            
            <form onSubmit={setUserSubmission}>
                <ul>
                    {answers}
                </ul>
             <input type="submit" value="Submit"/> 
            </form>

            </section>
            <section>
                
            </section>
        </div>
    )
}

export default MemeTest