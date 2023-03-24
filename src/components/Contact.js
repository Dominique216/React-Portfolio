import React from "react"; 
import '../styles/contact.css'
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";
// import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import resume from "../styles/resume.pdf"
import AOS from "aos";

function Contact() {
    AOS.init()
    return(
        <div id="contact" ddata-aos="fade-up" className="h-4/5">
            <h3 className="skills-title mt-5">Contact</h3>
            <div className="text-7xl gap-8 flex justify-center font-light m-8 text-dgreen">
            <Popover 
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              
            placement="top">
                <PopoverHandler>
                    <button className="hover:text-lgreen"><FontAwesomeIcon icon={faPhone} /></button>
                </PopoverHandler>
                <PopoverContent>
                    <span className="bg-dgreen p-1 text-tan rounded-lg">903-373-4742</span>
                </PopoverContent>
            </Popover> 
                    <a className="hover:text-lgreen" href="mailto:raquel_0216@yahoo.com"  target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faEnvelope} /></button></a>
                    <a className="hover:text-lgreen" href={resume} target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faFilePdf} /></button></a>
                    <a className="hover:text-lgreen" href="https://github.com/Dominique216"  target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faGithub}  /></button></a>
                    <a className="hover:text-lgreen" href="https://www.linkedin.com/in/dominique-nix-152361263/" target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faLinkedin} /></button></a>
            </div>
            <div className="h-48"></div>
        </div>
    )
}

export default Contact