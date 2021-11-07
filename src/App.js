import { Routes, Route, Link } from "react-router-dom";
import React ,{ useState } from 'react'
import './App.css';
import Home from './Components/Home'
//import { Document, Page, pdfjs } from "react-pdf";
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



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
