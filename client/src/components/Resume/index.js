import React from 'react';
import resume from '../../assets/files/DeivResume.pdf'



function Resume() {

    return (
       <div className="resume-body">
           <h2 className="p-4"> Resume </h2>
           <div className="download-here">
               <h3 className="p-3">
                   Please feel free to download my resume
                   <a href={resume} target="_blank" rel="noopener noreferrer">HERE</a>
               </h3>
           </div>
        </div>
        
    );
}


export default Resume;