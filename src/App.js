import React from "react";
import NavBar from "./components/NabBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div >
     <NavBar />
     <About />
     <Skills />
     <Works />
     <Contact />
    </div>
  );
}

export default App;
