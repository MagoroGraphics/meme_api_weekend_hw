import React from "react";
import MemeTest from "../components/MemeTest";
import MemeTestImage from "../components/MemeTestImage";

const TestContainer = ({memes, userSelection, setMultiChoice, setUserSubmission}) => {

    //take a random array index and access the name and url from it
    //pass the url to MemeTestImage to display it
    //pass the name to MemeTest

    const selectMemeIndex = () => {
        return Math.floor(Math.random() * memes.length);
    }


    let selectedIndex = selectMemeIndex()
    let memesCopy = [...memes]

    memesCopy.splice(selectedIndex, 1)

    const wrongMemeNames = memesCopy.map(meme => meme["name"])

    let possibleAnswers = []

    let counter = 0
    
    while(counter <= 3){
        possibleAnswers.push(wrongMemeNames[Math.floor(Math.random() * wrongMemeNames.length)])
        counter++
    } 

    let displayedMemeImage = memes[selectedIndex]["url"]
    let displayedMemeName = memes[selectedIndex]["name"]

    possibleAnswers.push(displayedMemeName)

    const handleSubmit = (submission) => {
        submission.preventDefault()
        console.log("This is User Submission: ", submission)
        let score = 0
        if (submission == displayedMemeName) {
            score++
        } else {
            return score
        } 
        return score
    }

    //take a set number (eg. 5) of other random index and pass the name to be set as wrong options in the questionnaire to MemeTest

    return(
        <section id="memetest">
            <div class="imagebox">
                <MemeTestImage meme={displayedMemeImage}/>
            </div>
            <div>
                <MemeTest correctAnswer={displayedMemeName} possibleAnswers={possibleAnswers}  userSelection={userSelection} setMultiChoice={setMultiChoice} handleSubmit={handleSubmit} setUserSubmission={setUserSubmission}/>
            </div>
        </section>
    )
}

export default TestContainer