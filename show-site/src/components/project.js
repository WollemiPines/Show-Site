import React, { useState } from 'react';

function Project() {
    const project = projs.map((proj) =>
      <div key={proj.id}>
        <div class="project_image_wraper">
            <div class="project_image">
                 <a href={proj.github} src={proj.image} alt={proj.alt}>
                   <div class="card-titles">
                      <h1>{proj.title}</h1>
                       <p>{proj.content}</p>
                    </div>
                 </a>
            </div>
      </div>
      </div>
    );
    return (
      <div>
        {project}
      </div>
    );
  }
  
  const projs = [
    {id: 1, title: 'Weather Site', content: 'Displays current and forecast weather for all major worldwide cities using the Open Weather API', github: "https://wollemipines.github.io/Weather-Site/", image:"./assets/images/WeatherSIte.png" , alt:''},
    {id: 2, title: 'Sortable Calendar', content: 'Track your day with this calendar', github:"https://wollemipines.github.io/Sortable-Calendar/", image: "./assets/images/Calendar.png" , alt:''},
    {id: 3, title: 'Password generator', content: 'Generate a randomised pasword with this vanilla javascript function', github: 'https://wollemipines.github.io/Password-Gen/', image: '../images/header.jpg', alt:''},
    {id: 4, title: 'Marvelous', content: 'An interactive fan page for Marvel enthusiats, utilising the data from the Marvel API', github: 'https://wollemipines.github.io/marvel_universe/', image: './assets/images/Marvelous.png', alt:''},
    {id: 5, title: 'LIFT', content: 'Establish and track your fitness goals while keeping an eye on important statitics', github: 'https://github.com/WollemiPines/do-you-lift', image: './assets/images/LIFT.png', alt:''}
    /* {id: 6, title: '', content: '', github: '', image: '', alt:''},
    {id: 7, title: '', content: '', github: '', image: '', alt:''} */
  ];
  
export default Project;
  
