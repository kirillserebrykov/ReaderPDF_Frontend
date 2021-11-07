import { Routes, Route, Link } from "react-router-dom";
import React ,{ useState } from 'react'
import './App.css';
import Home from './Components/Home'


const App = () => {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  );
}
//
export default App;
