import { Routes, Route } from "react-router-dom";
import React  from 'react'
import './App.css';
import HomeContainer from './Components/HomeContainer'
import AboutBookContainer from './Components/AboutBookContainer'
import ReadContainer from './Components/ReadContainer'

const App = () => {
  
  return  <Routes>
            <Route path="/" element={ <HomeContainer /> } />
            <Route path="/Book/*" element={ <AboutBookContainer/> } />
            <Route path="/Read/*" element={ <ReadContainer/> } />
        </Routes>
}
//
export default App;
