import React from 'react';
import './App.css';
import Footer from '../src/components/footer';
import Header from './components/header';
import { Route, Switch, Link } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
   <div>
    <div>
            <Header/>
            <Footer/>
        
    </div>


</div>
  );
}
  
export default App;
