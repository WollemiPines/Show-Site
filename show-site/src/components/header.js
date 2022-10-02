import React, { useState } from 'react';
import Navigation from './navigation';

const Header = () =>{
    return (
        <div class="header_container">
        <div class="header_title">
          <h1 class="main-header">Chris Wallace</h1>
          <h2>Front End <span class="dev">Developer</span></h2>
        </div>
        <div class="header-links"> 
          <Navigation/>
        </div>
  </div>
    )
}
export default Header;