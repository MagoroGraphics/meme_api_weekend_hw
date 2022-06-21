import React from "react";
import MemeTest from "../components/MemeTest";
import MemeTestImage from "../components/MemeTestImage";

const TestContainer = ({
    memes, 
    userSelection, 
    currentFiveMemes, 
    currentCorrectAnswer, 
    setMultiChoice, 
    setUserSubmission,
    getFiveRandomMemes,
    getCurrentCorrectAnswer
}) => {

    const multipleChoice = currentFiveMemes.map((meme, index)=>{
        return (<li key={index}> 
                    <input type="radio" name="quizz" />
                    <label>{meme["name"]}</label>
                </li>
        )
        
    })

    const handleOnClickSubmit = (e) => {
        e.preventDefault()
        getFiveRandomMemes()
        getCurrentCorrectAnswer()

    }


    // const selectMemeIndex = () => {
    //     return Math.floor(Math.random() * memes.length);
    // }


    // let selectedIndex = selectMemeIndex()
    // let memesCopy = [...memes]

    // memesCopy.splice(selectedIndex, 1)

    // const wrongMemeNames = memesCopy.map(meme => meme["name"])

    // let possibleAnswers = []

    // let counter = 0
    
    // while(counter <= 3){
    //     possibleAnswers.push(wrongMemeNames[Math.floor(Math.random() * wrongMemeNames.length)])
    //     counter++
    // } 

    // let displayedMemeImage = memes[selectedIndex]["url"]
    // let displayedMemeName = memes[selectedIndex]["name"]

    // possibleAnswers.push(displayedMemeName)

    // const handleSubmit = (submission) => {
    //     submission.preventDefault()
    //     console.log("This is User Submission: ", submission)
    //     let score = 0
    //     if (submission == displayedMemeName) {
    //         score++
    //     } else {
    //         return score
    //     } 
    //     return score
    // }

    return(
        <section id="memetest">
           <img src={currentCorrectAnswer["url"]} alt="meme" class="meme"></img>
           <form>
                {multipleChoice}
                <button type="submit" onClick={handleOnClickSubmit}>Submit</button>
           </form>
        </section>
    )
}

export default TestContainer