import React, { useState } from 'react';
const navigation = () =>{
    return (
        <div>
        <div class="h-link">
               <a href="../pages/projects.js">Projects</a>
          </div>
            <div class="h-link">
                 <a href="../pages/about.js">About</a>
            </div>
            <div class="h-link">
                 <a href="../pages/resume.js">Resume</a>
            </div>
            <div class="h-link">
                 <a href="../pages/contact">Contact</a>
           </div>
        </div>
    )
}
export default navigation;