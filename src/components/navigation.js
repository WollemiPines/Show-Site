import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function Navigation() {
  return (

      <div>
        <nav class='nav-list'>
          <ul>
            <li class="h-ref">
              <Link to="/about">About</Link>
            </li>
            <li class="h-ref">
              <Link to="/contact">Contact</Link>
            </li>
            <li class="h-ref">
              <Link to="/resume">Resume</Link>
            </li>
            <li class="h-ref">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>

  );
}
