
import './App.css';

import React from 'react';
import './App.css';
import Navbar from './components/navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from "../src/components/navigation"

import Footer from '../src/components/footer';
// import Project from '../src/components/project';
// import Projects from "./pages/projects";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Header from './components/header';

function App() {
  return (
    <div>
            <Header/>
         <Footer/>

</div>
  );
}
  
export default App;
