import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><About/> <Project/> </div>}/>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;