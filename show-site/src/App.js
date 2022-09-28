import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Projects from '../src/components/project';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
{/*       
      <body>
        <Body/>
      </body> */}

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
