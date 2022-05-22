import React, {useState, useEffect} from "react";
import MemeTest from "../components/MemeTest";
import TestContainer from "./TestContainer";
import Modal from "react-modal/lib/components/Modal";


const MemeTestBox = ({memes,isModalOpen,setIsModalOpen, user, handleNameChange, handleNameSubmit }) => {

    const [score, setScore] = useState(0)
    const [userSelection, setUserSelection] = useState('')
    const [multiChoiceAnswers, setMultiChoiceAnswers] = useState([])
    const [usersubmission, setUserSubmission] = useState("")
    const [randomizedQuizz, setRandomizedQuizz] = useState([])


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
        <Modal
        isOpen= {isModalOpen}
        ariaHideApp={false}
        contentLabel="User creation"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: 'white',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            textAlign: 'center',
            fontSize: '3em',
            fontWeight: 'bold',
            color: 'rgb(213, 30, 115)',
            display: 'flex',
            flexDirection: 'column',
          }
        }}
      >
        <form>
          <label htmlFor='name'>What's your meme connoisseur name? </label>
          <br/>
          <input type="text" placeholder={user}  name="name" onChange={handleNameChange}/>
          <br/>
          <input type="Submit" onSubmit={handleNameSubmit}/>
        </form>
      </Modal>
            <section>
                {<TestContainer memes={memes} userSelection={setUserSelection} setMultiChoice={setMultiChoiceAnswers} setUserSubmission={setUserSubmission}/>}
            </section>
        </main>
    )
}

export default MemeTestBox