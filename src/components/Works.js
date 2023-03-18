import React from "react"; 
import '../styles/works.css'

function Works() {
    return(
        <div className="works-section">
           <h3 className="skills-title">Works</h3>
           <div className="background-box"></div> 
           <div className='box1'>
            <img></img>
            <p>A more user interactive Wordle inspired game that  allows users to choose difficulty level and  play without the 24-hour break. This was created using HTML, CSS, JavaScript, and third party APIs.</p>
           </div>
           <div className='box2'>
            <img></img>
            <p>A FullStack blog site that requires signup or login. Once logged in, users can view existing posts and comments, add comments, and add, update, or delete their posts. This was made using Node, Express, MySql, Sequelize, Handlebars, and Bootstrap.</p>
           </div>
           <div className='box3'>
            <img></img>
            <p></p>
           </div>
        </div>
    )
}

export default Works