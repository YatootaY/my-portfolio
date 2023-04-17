import './App.css';
import Nav from "./Components/Nav"
import Hero from './Components/Hero';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <div className='home'>
        <Nav/>
        <Hero/>
      </div>
      <Projects/>
      
    </div>
  );
}

export default App;
