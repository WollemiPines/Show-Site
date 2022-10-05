import Project from '../components/project';
import React from 'react';

class Projects extends React.Component {
    
  render() {
      return (
        <div class="content_contact" id="content_contact">
        <h4>Projects</h4>
        <div className='projects'>
        <Project/>
        </div>
        </div>
    )
}
}
export default Projects;