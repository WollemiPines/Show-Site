import React, { useState } from 'react';
import Project from '../components/project';

const Projects = (props) =>{
    return (
        <div class="content_contact" id="content_contact">
        <h4>Projects</h4>
        <div className='projects'>
        <Project/>
        </div>
        </div>
    )
}
export default Projects;