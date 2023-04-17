import './App.css';
import Nav from "./Components/Nav"
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <div className='home'>
        <Nav/>
        <Hero/>
      </div>
      <Projects/>
      <About/>
    </div>
  );
}

export default App;
