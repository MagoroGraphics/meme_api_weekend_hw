import React,{useState} from "react";
import AnswerItem from "./AnswerItem";

const MemeTest = ({correctAnswer, possibleAnswers, handleScore, userSelected}) => {

    const [userSelection, setUserSelection] = useState()
    

    const renderAnswers = () => {
        let randomizedAnswers = []
        let possibleAnswersCopy = [...possibleAnswers]

            while(possibleAnswersCopy.length > 0){
                let index = 0
                let randomIndex = Math.floor(Math.random() * possibleAnswersCopy.length)
                let optionalAnswer = possibleAnswersCopy[randomIndex]
                possibleAnswersCopy.splice(randomIndex,1)
                randomizedAnswers.push(<AnswerItem optionalAnswer={optionalAnswer} key={index}/>)
                index++
        }
        return (
            randomizedAnswers
        )
    }

    const answers = renderAnswers()

    let score = 0

    const handleSubmitAnswer = () => {
        setUserSelection(document.querySelector('input[name="meme_questions"]:checked').value)
        correctAnswer === userSelection ? score + 1 : null

    }


    return (
        <div>
            
            <section id="test">
            <h2>What is the name of this meme?</h2>
            
            <form onsubmit={userSelected(target.value)}>
                <ul>
                    {answers}
                </ul>
             <button onClick={handleScore} id='submit'> Submit </button>
            </form>

            </section>
            <section>
                
            </section>
        </div>
    )
}

export default MemeTest