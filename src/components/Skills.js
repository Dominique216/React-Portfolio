import React from "react"; 
import '../styles/skills.css'
import AOS from "aos";

function Skills() {
    AOS.init()
    return (
        <div id="skills" className="skills-section" data-aos="fade-up">
            <h3 className="skills-title"> Skills and Languages</h3>
            <div className="flex flex-col w-full mx-auto">
            <div className="flex mx-auto flex-col lg:flex-row w-full h-fit mb-8 text-dgreen font-light text-center items-center lg:items-stretch" data-aos="zoom-in">
                <div className="w-3/5 lg:w-1/4 border border-dgreen bg-lgreen/50 rounded mx-2 mb-2">
                    <h2 className="text-3xl underline">Front End</h2>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">HTML</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">CSS</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Bootstrap</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Tailwind</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">JavaScript</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">jQuery</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Handlebars</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">React</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Material UI</p>
                </div>
                
                <div className="w-3/5 lg:w-1/4 border border-dgreen bg-lgreen/50 rounded mx-2 mb-2">
                    <h2 className="text-3xl underline">Back End</h2>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Node</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Express</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">MySQL</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Sequelize</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">MongoDB</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto"> Mongoose</p>
                </div>
                <div className="w-3/5 lg:w-1/4 border border-dgreen bg-lgreen/50 rounded mx-2 mb-2">
                    <h2 className="text-3xl underline">Other Skills</h2>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">GitHub</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Third Part Apis</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Figma</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-5 my-2 mx-auto">Heroku</p>
                </div>
                <div className="w-3/5 lg:w-1/4 border border-dgreen bg-lgreen/50 rounded mx-2 mb-2 p-1">
                    <h2 className="text-3xl underline ">Concepts</h2>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-2 my-2 mx-auto">Object Oriented Programing</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-2 my-2 mx-auto">Objec-Relational Mapping</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-2 my-2 mx-auto">Model-View-Controller</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-1 my-2 mx-auto">Progressive web Applications</p>
                    <p className="text-2xl rounded-full bg-green/50 w-fit px-2 my-2 mx-auto">MERN Applications</p>
                </div>
            </div>
            <div className="skills-circle rounded-full max-w-5/6">
                <div className="center mx-auto"></div>
                <img className='item w-1/5 mx-auto p-1' style={{animationDelay: "-1s"}} alt="html icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                <img className='item w-1/5 mx-auto p-1' style={{animationDelay: "-2s"}} alt="css icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <img className='item w-1/5 mx-auto p-1' style={{animationDelay: "-3s"}} alt="tailwind icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
                <img className='item w-1/5 mx-auto p-1' style={{animationDelay: "-4s"}} alt="bootstrap icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />
                <img className='item w-1/5 mx-auto p-1' style={{animationDelay: "-5s"}} alt="javascript icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img className='item w-1/5 mx-auto p-1' style={{animationDelay: "-6s"}} alt="react icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-7s"}} alt="material UI icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-8s"}} alt="mongoDB icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-9s"}} alt="mysql icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-10s"}} alt="sequalize icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-11s"}} alt="node.js icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-12s"}} alt="express icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-13s"}} alt="figma icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-14s"}} alt="github icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-15s"}} alt="handlebars icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-16s"}} alt="heroku icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-17s"}} alt="jQuery icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-18s"}} alt="npm icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                <img className='item2 w-1/5 mx-auto p-1' style={{animationDelay: "-19s"}} alt="vscode icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" />
            </div>
            </div>
            <div className="h-48"></div>
        </div>
    )
}

export default Skills;