import React from "react";
import NavBar from "./components/NabBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import './App.css';

function App() {
  return (
    <div >
     < NavBar />
     <About />
     <Skills />
     <Works />
    </div>
  );
}

export default App;
