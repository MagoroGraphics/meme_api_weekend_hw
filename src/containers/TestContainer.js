import React from "react";
import MemeTest from "../components/MemeTest";
import MemeTestImage from "../components/MemeTestImage";

const TestContainer = ({memes, handleScore, userSelected}) => {

    //take a random array index and access the name and url from it
    //pass the url to MemeTestImage to display it
    //pass the name to MemeTest

    const selectMemeIndex = () => {
        return Math.floor(Math.random() * memes.length);
    }


    let selectedIndex = selectMemeIndex()
    let memesCopy = [...memes]

    memesCopy.splice(selectedIndex, 1)

    const wrongNames = memesCopy.map(meme => meme["name"])

    let possibleAnswers = []

    let counter = 0
    
    while(counter <= 3){
        possibleAnswers.push(wrongNames[Math.floor(Math.random() * wrongNames.length)])
        counter++
    } 

    let selectedImage = memes[selectedIndex]["url"]
    let selectedName = memes[selectedIndex]["name"]

    possibleAnswers.push(selectedName)

    //take a set number (eg. 5) of other random index and pass the name to be set as wrong options in the questionnaire to MemeTest

    return(
        <section id="memetest">
            <div class="imagebox">
                <MemeTestImage meme={selectedImage}/>
            </div>
            <div>
                {possibleAnswers.length > 0 ? <MemeTest correctAnswer={selectedName} possibleAnswers={possibleAnswers} handleScore={handleScore} userSelected={userSelected}/> : null}
            </div>
        </section>
    )
}

export default TestContainer