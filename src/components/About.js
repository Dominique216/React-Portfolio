import React from "react";
import '../styles/about.css'
import avatar from '../styles/avataaars.png'
import Aos from "aos";
import 'aos/dist/aos.css'
import Typewriter from "typewriter-effect";

function About() {
    Aos.init()
    return(
        <div id="about" className="main">
            <div className="circle1 rounded-full w-48 bg-dgreen"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="info-box sm:w-full md:w-3/4" data-aos="fade-right" data-aos-duration="2000">
            <div className="name" >
                <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("Hello, my name is Dominique Nix")
                    .pauseFor(1000)
                // .deleteAll()
                // .typeString("Welcome to my protfolio!")
                    .start();
                }}
                />
            </div>
                <p className="aboutInfo">I'm a graduate of UT Austin's Full Stack Coding Certification program and am looking to start my career in software development. I have experience working with front-end languages and frameworks, back-end languages, databases, building full stack MERN applications, and more.</p>
            </div>
            <div className="avatar-circle">
                <img className="avatar md:ml-auto md:-mt-8" src ={avatar} alt="avatar"  data-aos="fade-left" data-aos-duration="2000"/>
            </div>
        </div>
    )
}

export default About