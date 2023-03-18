import React from "react";
import '../styles/about.css'
import avatar from '../styles/avataaars.png'

function About() {
    return(
        <div className="main">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="info-box">
                <h3 className="name">Hello, my name is Dominique Nix|</h3>
                <p className="aboutInfo">I'm a gradute of UT's Austin FullStack Coding sertification program and am looking to start my carrer in software developerment. I have experience working in with front-end languages and frameworks, backend-languages, databases, building full stack MERN applications, and more.</p>
            </div>
            <div className="avatar-circle">
                <img className="avatar" src ={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default About