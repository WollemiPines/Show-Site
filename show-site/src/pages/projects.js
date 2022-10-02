function Projects(props) {
    const project = props.projs.map((projs) =>
      <div key={projs.id}>
        <h3>{projs.title}</h3>
        <p>{projs.content}</p>
      </div>
    );
    return (
      <div>
        {project}
      </div>
    );
  }
  
  const projs = [
    {id: 1, title: 'Weather Site', content: 'Displays current and forecast weather for all major worldwide cities using the Open Weather API', github: "https://wollemipines.github.io/Weather-Site/", image:"./assets/images/WeatherSIte.png" },
    {id: 2, title: 'Sortable Calendar', content: 'Track your day with this calendar', github:"https://wollemipines.github.io/Sortable-Calendar/", image: "./assets/images/Calendar.png" },
    {id: 3, title: 'Password generator', content: 'Generate a randomised pasword with this vanilla javascript function', github: 'https://wollemipines.github.io/Password-Gen/', image: './assets/images/passwordGen.png'},
    {id: 4, title: 'Marvelous', content: 'An interactive fan page for Marvel enthusiats, utilising the data from the Marvel API', github: 'https://wollemipines.github.io/marvel_universe/', image: './assets/images/Marvelous.png'},
    {id: 5, title: 'LIFT', content: 'Establish and track your fitness goals while keeping an eye on important statitics', github: 'https://github.com/WollemiPines/do-you-lift', image: './assets/images/LIFT.png'},
    // {id: 6, title: '', content: '', github: '', image: ''},
    // {id: 7, title: '', content: '', github: '', image: ''},
  ];
  
export default Projects;
  