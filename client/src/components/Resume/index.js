import React from 'react';
import resume from '../../assets/files/DeivResume.pdf'



function Resume() {

    return (
       <div className="resume-body">
           <h2 className="p-4">Resume</h2>
           <div className="download-here">
               <h3 className="p-3">
                   Please feel free to download my resume
                   <a href={resume} target="_blank" rel="noopener noreferrer"> HERE </a>
               </h3>
           </div>
           <div className="resumebody p-3">
               <div className="fe-experience">
                   <h3>Front-End Experience</h3>
                   <ul>
                       <li>HTML</li>
                       <li>CSS</li>
                       <li>Responsive Design</li>
                       <li>JavaScript</li>
                       <li>jQuery</li>
                       <li>Bootstrap</li>
                       <li>React</li>
                   </ul>
               </div>
               <div className="be-experience">
                   <h3>Back-End Experience</h3>
                   <ul>
                       <li>APIs</li>
                       <li>Node.JS</li>
                       <li>Express.JS</li>
                       <li>MySQL</li>
                       <li>Sequelize</li>
                       <li>Heroku</li>
                       <li>NoSQL</li>
                       <li>Mongoose</li>
                       <li>MongoDB</li>
                       <li>MongoDB Atlas</li>
                       <li>Restful APIs</li>
                       <li>Apollo</li>
                       <li>GraphQL</li>
                       <li>Insomnia</li>
                   </ul>
               </div>
           </div>
        </div>
        
        
    );
}


export default Resume;