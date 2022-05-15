import React, {useState, useEffect} from "react";
import MemeTest from "../components/MemeTest";
import TestContainer from "./TestContainer";


const MemeTestBox = () => {

    const [memes, setMemesList] = useState([])

    useEffect(() => {
      
      loadMemes()
  
    }, [])
    
     const loadMemes = async function(){
        fetch("https://api.imgflip.com/get_memes?fbclid=IwAR1mOSdGl4vxWygsq0-1_sZFj1Cek5zIK5pfGrqSUZATGILpZ_U-ahNsEhI")
        .then(response => response.json())
        .then(memes => setMemesList(memes.data.memes))
        .catch(error => console.error)
    }


    return(
        <main>
            <header>
                <h1>MEME KNOWLEDGE TEST</h1>
                <h2>How well do you know your memes?</h2>
            </header>
            <section>
                
                {memes.length > 0 ? <TestContainer memes={memes}/> : null}
            </section>
        </main>
    )
}

export default MemeTestBox