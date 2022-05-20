import React, {useState, useEffect} from "react";
import MemeTest from "../components/MemeTest";
import TestContainer from "./TestContainer";


const MemeTestBox = () => {

    const [memes, setMemesList] = useState([])
    const [score, setScore] = useState(0)
    const [userSelected, setUserSelected] = useState('')

    useEffect(() => {
      
      loadMemes()
  
    }, [])
    
     const loadMemes = async function(){
        fetch("https://api.imgflip.com/get_memes?fbclid=IwAR1mOSdGl4vxWygsq0-1_sZFj1Cek5zIK5pfGrqSUZATGILpZ_U-ahNsEhI")
        .then(response => response.json())
        .then(memes => setMemesList(memes.data.memes))
        .catch(error => console.error)
    }

    const handleScore = () => {
        userSelected === correctAnswer ? setScore(score + 1) : null
    }

    return(
        <main>
            <header>
                <section id="title">
                    <h1>MEME KNOWLEDGE TEST</h1>
                    <h2>How well do you know your memes?</h2>
                </section>
                <section>
                    <h2>Score {score}</h2>
                </section>
            </header>
            <section>
                
                {memes.length > 0 ? <TestContainer memes={memes} handleScore={handleScore} userSelected={setUserSelected}/> : null}
            </section>
        </main>
    )
}

export default MemeTestBox