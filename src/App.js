import './App.css';
import React, {useEffect, useState} from 'react';
import MemeTestBox from './containers/MemeTestBox';
import Gallery from './components/Gallery';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import styled from 'styled-components';


const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(213, 30, 115);
  
`
const StyledLink = styled(Link)`
  color: rgb(241, 227, 146);
  font-weight: 600;
  font-size: 1em;
  padding: 20px;
`

function App() {

  const [memes, setMemesList] = useState([])
  const [userName, setUserName] = useState('')
  const [currentFiveMemes, setCurrentFiveMemes] = useState([])
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState({})

  useEffect(() => {
      
    loadMemes()

  }, [])
  
   const loadMemes =  () => {
      fetch("https://api.imgflip.com/get_memes?fbclid=IwAR1mOSdGl4vxWygsq0-1_sZFj1Cek5zIK5pfGrqSUZATGILpZ_U-ahNsEhI")
      .then(response => response.json())
      .then(memes => setMemesList(memes.data.memes))
      .catch(error => console.error)
  }



  const getFiveRandomMemes = () => {

    let randomMemeList = []

    for(let i = 0; i < 5; i++){
      let randomIndex = Math.floor(Math.random() * memes.length)
      randomMemeList.push(memes[randomIndex])

    }
    setCurrentFiveMemes(randomMemeList)

  }

  const getCurrentCorrectAnswer = () => {
    let correctAnswer = {};
    let randomIndex = Math.floor(Math.random() * currentFiveMemes.length)
    correctAnswer = currentFiveMemes[randomIndex]
    setCurrentCorrectAnswer(correctAnswer)
  }



  return (
    <>
      <button onClick={() => {getFiveRandomMemes()}}>random questions</button>
      <button onClick={()=> {getCurrentCorrectAnswer()}}>Get correct answer</button>
      <Router>
        <NavBar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/gallery">Gallery</StyledLink>
        </NavBar>
          
      
        
          <Routes>
            <Route 
              path="/" 
              element={memes.length > 0 ? <MemeTestBox 
              memes={memes} 
              userName = {userName}
              setUserName = {setUserName}
              currentFiveMemes = {currentFiveMemes}
              currentCorrectAnswer = {currentCorrectAnswer}
              getCurrentCorrectAnswer = {getCurrentCorrectAnswer}
            /> : null}
            />
            <Route 
              path="/gallery" 
              element={memes.length > 0 ? <Gallery memes={memes}
            />  : null}/>
            <Route 
              path="*" 
              element={<ErrorPage/>}
            />
          </Routes>
        
        
      </Router>
    </>
  );
}

export default App;
