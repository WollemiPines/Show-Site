import React, { useState } from 'react';
import calendar from '../images/Calendar.png';
import jsquiz from '../images/JSQuiz.gif';
import lift from '../images/LIFT.png';
import marvelous from '../images/Marvelous.png';
import password from '../images/passwordGen.png';
import weathersite from '../images/WeatherSite.png';

function Project() {
    const project = projs.map((proj) =>
      <div class="card" key={proj.id}>
        <div class="project_image_wraper card-img-top">
            <div class="project_image">
                 <a href={proj.github}>
                 <img src={proj.image} alt={proj.alt}></img>
                   <div class="card-title">
                  
                      <h1 class="card-title">{proj.title}</h1>
                       <p class="card-text">{proj.content}</p>
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
    {id: 1, title: 'Weather Site', content: "Displays current and forecast weather for all major worldwide cities using the Open Weather API", github: "https://wollemipines.github.io/Weather-Site/", image: weathersite , alt:""},
    {id: 2, title: 'Sortable Calendar', content: 'Track your day with this calendar', github:"https://wollemipines.github.io/Sortable-Calendar/", image: calendar , alt:''},
    {id: 3, title: 'Password generator', content: 'Generate a randomised pasword with this vanilla javascript function', github: 'https://wollemipines.github.io/Password-Gen/', image: password, alt:''},
    {id: 4, title: 'Marvelous', content: 'An interactive fan page for Marvel enthusiats, utilising the data from the Marvel API', github: 'https://wollemipines.github.io/marvel_universe/', image: marvelous, alt:''},
    {id: 5, title: 'LIFT', content: 'Establish and track your fitness goals while keeping an eye on important statitics', github: 'https://github.com/WollemiPines/do-you-lift', image: lift, alt:''}
  ];
  
export default Project;
  
