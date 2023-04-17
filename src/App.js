import './App.css';
import Nav from "./Components/Nav"
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      <div className='home'>
        <Nav/>
        <Hero/>
      </div>
      <Nav/>
      
    </div>
  );
}

export default App;
