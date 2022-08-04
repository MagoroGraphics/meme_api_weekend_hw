import "./App.css";
import React, { useEffect, useState } from "react";
import MemeTestBox from "./containers/MemeTestBox";
import Gallery from "./components/Gallery";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

//#region Styled Components
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(213, 30, 115);
`;
const StyledLink = styled(Link)`
  color: rgb(241, 227, 146);
  font-weight: 600;
  font-size: 1em;
  padding: 20px;
`;
//#endregion

function App() {
  const [memes, setMemesList] = useState([]);
  const [userName, setUserName] = useState("");
  // const [currentFiveMemes, setCurrentFiveMemes] = useState([]);
  const [fullQuiz, setFullQuiz] = useState([]);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState({});
  const [questionNum, setQuestionNum] = useState(0);
  const [allCorrectAnswers, setAllCorrectAnswers] = useState([]);

  useEffect(() => {
    loadMemes();
  }, []);

  useEffect(() => {
    // getFiveRandomMemes();
    getFullQuiz()
  }, [memes]);

  const loadMemes = () => {
    fetch(
      "https://api.imgflip.com/get_memes?fbclid=IwAR1mOSdGl4vxWygsq0-1_sZFj1Cek5zIK5pfGrqSUZATGILpZ_U-ahNsEhI"
    )
      .then((response) => response.json())
      .then((memes) => setMemesList(memes.data.memes))
      .catch((error) => console.error);
  };

  // const getFiveRandomMemes = () => {
  //   let randomMemeList = [];

  //   for (let i = 0; i < 5; i++) {
  //     let randomIndex = Math.floor(Math.random() * memes.length);
  //     randomMemeList.push(memes[randomIndex]);
  //   }
  //   setCurrentFiveMemes(randomMemeList);
  // };

  const getFullQuiz = () => {
    let allQuestions = [];

    for (let i = 0; i < 10; i++) {
      let randomMemeList = [];
      for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * memes.length);
        randomMemeList.push(memes[randomIndex]);
      }
      allQuestions.push(randomMemeList);
      setFullQuiz(allQuestions);
    }
  };

  const getCurrentCorrectAnswer = () => {
    let correctAnswer = {};

    let randomIndex = Math.floor(Math.random() * fullQuiz[questionNum].length);
    console.log(
      "This is the fullQuiz content: ",
      fullQuiz[questionNum],
      "by index number: ",
      questionNum
    );
    correctAnswer = fullQuiz[questionNum][randomIndex];
    console.log({ correctAnswer });
    setCurrentCorrectAnswer(correctAnswer);
  };

  const getAllCorrectAnswers = () => {
    let answers = []
    fullQuiz.forEach((question) => {
      let correctAnswer = {};
      
      let randomIndex = Math.floor(
        Math.random() * question.length
      );
      correctAnswer = question[randomIndex];
      answers.push(correctAnswer);
    });
    setAllCorrectAnswers(answers)
  };

  return (
    <>
      {/* <button onClick={() => {getFiveRandomMemes()}}>random questions</button>
      <button onClick={()=> {getCurrentCorrectAnswer()}}>Get correct answer</button> */}
      <Router>
        <NavBar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/gallery">Gallery</StyledLink>
        </NavBar>

        <Routes>
          <Route
            path="/"
            element={
              memes.length > 0 ? (
                <MemeTestBox
                  memes={memes}
                  userName={userName}
                  setUserName={setUserName}
                  // currentFiveMemes={currentFiveMemes}
                  currentCorrectAnswer={currentCorrectAnswer}
                  getCurrentCorrectAnswer={getCurrentCorrectAnswer}
                  // getFiveRandomMemes={getFiveRandomMemes}
                  fullQuiz={fullQuiz}
                  questionNum={questionNum}
                  setQuestionNum={setQuestionNum}
                  getAllCorrectAnswers = {getAllCorrectAnswers}
                />
              ) : null
            }
          />
          <Route
            path="/gallery"
            element={
              memes.length > 0 ? (
                <Gallery memes={memes} userName={userName} />
              ) : null
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
