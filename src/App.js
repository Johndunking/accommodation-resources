import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Sidebar from './Components/Sidebar';
import Home from './Container/Home/Home';
import Reading from './Components/Reading/Reading';
import Math from './Components/Numbers/Math';
import Writing from './Components/Writing/Writing'
import Science from './Components/Science/Science'
import SEL from './Components/SEL/SEL'
import Chatgpt from './Components/gpt/Chatgpt';



import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="reading" element={<Reading />} />
      <Route path="writing" element={<Writing />} />
      <Route path="math" element={<Math />} />
      <Route path="science" element={<Science />} />
      <Route path="sel" element={<SEL />} />
      <Route path='teacher' element={<Chatgpt />} />
      
    </Routes>
    </>
  );
};

export default App;
