import React from "react"; 
import '../styles/works.css'
import AOS from "aos";
import 'aos/dist/aos.css';
import WW from '../styles/WW.png';
import TB from '../styles/TB.png'
import PP from '../styles/PP.png'

import { Button } from "@material-tailwind/react";


function Works() {
    AOS.init()
    return(
        <div id="works" className="works-section">
           <h3 data-aos="fade-up" className="skills-title">Works</h3>
           <div className="background-box"></div> 
           <div data-aos="fade-right" data-aos-offset="500" className='box1 w-full text-center md:w-4/5 flex-col-reverse md:flex-row-reverse'>
                <img className="ww mx-auto" src={WW} alt="which word homepage" />
                <div className="flex flex-col">
                    <h4 className="text-center">WhichWord</h4>
                    <p className="mr-8">A more user interactive Wordle inspired game that  allows users to choose difficulty level and  play without the 24-hour break. This was created using HTML, CSS, JavaScript, and third party APIs.</p>
                    <div className="d-inline mx-auto mb-8">
                        <a href="https://github.com/Dominique216/Word-Guessing-Game" target="_blank" rel="noreferrer"><Button size="md" variant="gradient" className="button mr-2 rounded-lg p-2 mt-2">GitHub Repo</Button></a>
                        <a href="https://whichword.herokuapp.com/" target="_blank" rel="noreferrer"><Button size="md" variant="gradient" className="button ml-2 rounded-lg p-2 mt-2">Live URL</Button></a> 
                    </div>  
                </div>
            </div>
                <div data-aos="fade-left" data-aos-offset="500" className='box2 ml-auto text-center sm:w-full md:w-4/5 flex-col-reverse md:flex-row'>
                    <img className="mx-auto" src={TB} alt="tech blog homepage" />
                    <div className="flex flex-col">
                        <h4 className="text-center">Tech Blog</h4>
                        <p className="ml-8">A FullStack blog site that requires signup or login. Once logged in, users can view existing posts and comments, add comments, and add, update, or delete their posts. This was made using Node, Express, MySql, Sequelize, Handlebars, and Bootstrap.</p>
                        <div className="d-inline mx-auto mb-8">
                            <a href="https://github.com/Dominique216/Tech-Blog" target="_blank" rel="noreferrer"><Button size="md" variant="gradient" className="button mr-2 rounded-lg p-2 mt-2">GitHub Repo</Button></a>
                            <a href="https://tech-blog-014.herokuapp.com/" target="_blank" rel="noreferrer"><Button size="md" variant="gradient" className="button ml-2 rounded-lg p-2 mt-2">Live URL</Button></a> 
                        </div> 
                    </div>
                </div>
           <div data-aos="fade-right" data-aos-offset="500" className='box3 w-full md:w-4/5 text-center flex-col-reverse md:flex-row-reverse'>
                <img className="mx-auto" src={PP} alt="ProPairs profile page" />
                <div className="flex flex-col">
                    <h4 className="text-center">ProPairs</h4>
                    <p className="mr-8">ProPairs is a FullStack MERN application that evaluates users based on their personality type and generates a rating of how well they will work together with one another based on their Myers-Briggs personality type. It was made using React, Material UI, mongoDB, mongoose, node, and express.</p>
                    <div className="d-inline mx-auto mb-8">
                        <a href="https://github.com/MZernick/Project-Partners" target="_blank" rel="noreferrer"><Button size="md" variant="gradient" className="button mr-2 rounded-lg p-2 mt-2">GitHub Repo</Button></a>
                        <a href="https://pro-pairs.herokuapp.com/" target="_blank" rel="noreferrer"><Button size="md" variant="gradient" className="button ml-2 rounded-lg p-2 mt-2">Live URL</Button></a> 
                    </div> 
                </div>
           </div>
           <div className="h-48"></div>
        </div>
    )
}

export default Works