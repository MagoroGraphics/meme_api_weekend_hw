import './App.css';
import React, {useEffect, useState} from 'react';
import MemeTestBox from './containers/MemeTestBox';
import Gallery from './components/Gallery';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal/lib/components/Modal';

function App() {

  const [memes, setMemesList] = useState([])
  const [fullQuizz, setFullQuiz] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [user, setUser] = useState("")


  useEffect(() => {
      
    loadMemes()

  }, [])
  
   const loadMemes =  () => {
      fetch("https://api.imgflip.com/get_memes?fbclid=IwAR1mOSdGl4vxWygsq0-1_sZFj1Cek5zIK5pfGrqSUZATGILpZ_U-ahNsEhI")
      .then(response => response.json())
      .then(memes => setMemesList(memes.data.memes))
      .catch(error => console.error)
  }


  

/* 
Get 10 sets of 5 random meme objects in an array and place them in fullQuizz state

From each set of the fullQuizz, get 1 correctAnswer meme

Randomise and display each set of fullQuizz.name in radio inputs making sure the correct answer is included

*/



const selectMemeIndex = () => {
  return Math.floor(Math.random() * memes.length);
}

let selectedIndex = selectMemeIndex()



const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(213, 30, 115);
  
`
const StyledLink = styled(Link)`
  color: rgb(241, 227, 146);
  font-weight: 600;
  font-size: 2em;
  padding: 20px;

`
const handleNameSubmit = (e) => {
  e.preventDefault()
  setIsModalOpen(!isModalOpen)
}

const handleNameChange = (e) => {
  e.preventDefault()
  setUser(e.target.value)
}

  return (
    
    <Router>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/gallery">Gallery</StyledLink>
      </NavBar>
        
     
      
        <Routes>
          <Route 
            path="/" 
            element={memes.length > 0 ? <MemeTestBox memes={memes} 
            isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} /> : null}
            user = {user}
            handleNameChange={handleNameChange}
            handleNameSubmit={handleNameSubmit}
          />
          <Route path="/gallery" element={memes.length > 0 ? <Gallery memes={memes}/>  : null}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      
      
    </Router>
    
  );
}

export default App;
