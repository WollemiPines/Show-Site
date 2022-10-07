import React from 'react';
import './App.css';
import Footer from '../src/components/footer';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Projects from './pages/projects';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path="/Show-Site/" element={<About />} />
      <Route exact path="/Show-Site/about" element={<About />} />
      <Route exact path="/Show-Site/contact" element={<Contact />} />
      <Route exact path="/Show-Site/resume" element={<Resume />} />
      <Route exact path="/Show-Site/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
