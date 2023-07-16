import './App.css';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { useEffect, useState, useRef } from 'react'

function App() {
  
  const time = new Date()
  const hour = time.getHours()
 
  const handleClick = (id) => {
    console.log(id);
    const element = document.getElementById(id)
    element.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="App">

      <AppBar position="sticky" style={{backgroundColor:"transparent"}}>
        <div className='navContainer'>
        <Button color="inherit" onClick={() => handleClick('about')}>About</Button>
        <Button color="inherit" onClick={() => handleClick('experience')}>Experience</Button>
        <Button color="inherit" onClick={() => handleClick('projects')}>Projects</Button>
        <Button color="inherit" onClick={() => handleClick('contact')}>Contact</Button>
        </div>
      </AppBar>
      <header className="App-header">
        {hour < 12 ? "Good morning" : (hour < 18 ? "Good afternoon" : "Good evening")}, my name is Andy Le.
      </header>
        <div
          id='about'
          className="page">
          <p>I'm a Software Engineering student at the University of Technology Sydney.</p>
          <p> I have an interest in web development and am in particular working towards becoming a full stack developer.</p>

          <h1>Technical Skills </h1>
          
          <div>
            <Skills/>
          </div>
        </div>

        <Experience/>

        <Projects/>

        <Contact/>
    </div>
  );
}

export default App;
