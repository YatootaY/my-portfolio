import './App.css';
import Nav from "./Components/Nav"
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import About from './Components/About';
import Skills from './Components/Skills';
import HireMe from './Components/HireMe';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import React,{useEffect} from 'react';

function App() {

  useEffect(()=> {
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove("show")
        }
      })
    })

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el))
  })

  return (
    <div className="App">
      <div className='home'>
        <Nav/>
        <Hero/>
      </div>
      <Projects/>
      <About/>
      <Skills />
      <HireMe/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
