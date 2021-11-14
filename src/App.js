import { Routes, Route } from "react-router-dom";
import React  from 'react'
import './App.css';
import HomeContainer from './Components/HomeContainer'
import BookContainer from './Components/BookContainer'
import ReadContainer from './Components/ReadContainer'

const App = () => {
  
  return  <Routes>
            <Route path="/" element={ <HomeContainer /> } />
            <Route path="/Book/*" element={ <BookContainer/> } />
            <Route path="/Read/*" element={ <ReadContainer/> } />
        </Routes>
}
//
export default App;
