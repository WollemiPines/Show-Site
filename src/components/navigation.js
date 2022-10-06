import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li class="h-ref">
              <Link to="/">About</Link>
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
    </Router>
  );
}
