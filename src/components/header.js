import React, { useState } from 'react';
import Navigation from './navigation';

function Header() {

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
        <Navigation />

      </div>
      </div>
    </div>
  );
}
export default Header;
