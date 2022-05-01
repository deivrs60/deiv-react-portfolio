import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaStackOverflow,
} from "react-icons/fa";


export default function Footer() {

    return (
       <footer className="footers">
           <div className="text-center">
               <h1>
                   <span>
                       <a href="https://github.com/deivrs60">
                           <FaGithub />
                       </a>
                   </span>
                   <span>
                       <a href="https://www.linkedin.com/in/david-reyes-738b5421b/">
                           <FaLinkedin />
                       </a>
                   </span>
                   <span>
                       <a href="https:instagram.com/deivr.s">
                           <FaInstagram />
                       </a>
                   </span>
                   <span>
                       <a href="https://stackoverflow.com/users/16820001/david-reyes">
                           <FaStackOverflow />
                        </a>
                   </span>
               </h1>
           </div>
       </footer>
    );
}


