import React, { useState } from 'react';
import Navbar from './navigation';
import About from '../pages/about';
import Contact from '../pages/contact';
import Resume from '../pages/resume';
import Projects from '../pages/projects';

function Header() {
  let component;
  switch (window.location.pathname) {
    case '/':
      component = <About />;
      break;
    case '/contact':
      component = <Contact />;
      break;
    case '/about':
      component = <About />;
      break;
    case '/projects':
      component = <Projects />;
      break;
    case '/resume':
      component = <Resume />;
      break;
     default:
        component = <About />;
  }

  return (
    <div class="header_container">
      <div class="header_container_two">
      <div class="header_title">
        <h1 class="main-header">Chris Wallace</h1>
        <h2>
          Full Stack <span class="dev">Developer</span>
        </h2>
      </div>
      <div class="header-links">
        <Navbar />
        {component}
      </div>
      </div>
    </div>
  );
}
export default Header;
