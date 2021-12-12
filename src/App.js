import { Routes, Route,  } from "react-router-dom";
import React  from 'react'
import './App.css';
import HomeContainer from './Components/Home/HomeContainer'
import AboutBookContainer from './Components/AboutBook/AboutBookContainer'
import ReadContainer from './Components/Read/ReadContainer'


const App = () => {


  return <Routes >
                <Route path="/" element={ <HomeContainer /> } />
                <Route path="/Book/*" element={ <AboutBookContainer/> } />
                <Route path="/Read/*" element={ <ReadContainer/> } />
            </Routes>
   
}

export default App;
