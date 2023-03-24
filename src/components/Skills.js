import React from "react"; 
import '../styles/skills.css'
import AOS from "aos";

function Skills() {
    AOS.init()
    return (
        <div id="skills" className="skills-section">
            <h3 className="skills-title"> Skills and Languages</h3>
            <div className="flex flex-col md:flex-row w-5/6 mx-auto">
            <ul className="ml-8 font-light text-dgreen text-center">
                <li><h2 className="text-3xl underline">Front End</h2></li>
                <li className="text-2xl">HTML</li>
                <li className="text-2xl">CSS</li>
                <li className="text-2xl">Tailwind</li>
                <li className="text-2xl">Bootstrap</li>
                <li className="text-2xl">JavaScript</li>
                <li className="text-2xl">jQuery</li>
                <li className="text-2xl">Handlebars</li>
                <li className="text-2xl">React</li>
                <li className="text-2xl">Material UI</li>
                <li className="text-2xl">Figma</li>
                <li className="text-2xl"><h2 className="text-3xl underline mt-5">Other Skills</h2></li>
                <li className="text-2xl">GitHub</li>
                <li className="text-2xl">Third Part Apis</li>
                <li className="text-2xl">Figma</li>
                <li className="text-2xl">Heroku</li>
                
            </ul>
            <div className="skills-circle rounded-full">
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
            
            <ul className="font-light text-dgreen text-center">
                <li className="text-2xl"><h2 className="text-3xl underline">Back End</h2></li>
                <li className="text-2xl">Node</li>
                <li className="text-2xl">Express</li>
                <li className="text-2xl">MySQL</li>
                <li className="text-2xl">Sequelize</li>
                <li className="text-2xl">MongoDB</li>
                <li className="text-2xl">Mongoose</li>
                <li className="text-2xl"><h2 className="text-3xl underline mt-5">Concepts</h2></li>
                <li className="text-2xl">Object Oriented Programing</li>
                <li className="text-2xl">Objec-Relational Mapping</li>
                <li className="text-2xl">Model-View-Controller</li>
                <li className="text-2xl">Progressive web Applications</li>
                <li className="text-2xl">MERN Applications</li>

            </ul>
            </div>
            <div className="h-48"></div>
        </div>
    )
}

export default Skills;