import React from 'react';
// import {avatar_image_} from "../../assets/images/"
import selfie from "../../assets/images/selfie.jpeg"

function About() {

    return (
        <div id ="about-body">
            <section className="my-5" id="nameimg">
            {/* img src={_img_} className="" style={{ width }} alt=" " */}
            <img src={selfie} className="selfie" style={{ width: "400px" }} alt=" Deiv"></img>
             </section>
             <section className="my-5" id="intro">
                <h1>Hi, 
                        <br></br>
                    My name is 
                        <br></br>
                    David Reyes Santoyo,
                        <br></br>
                    Also known as Deiv!</h1>
                        <br></br>
                        <br></br>
                <p>
                    I am an aspiring Full-Stack Engineer! 
                        <br></br>
                        <br></br>
                    While I may not know much,
                        <br></br>
                    You can rest assured that I will
                        <br></br>
                    do my best to get the job done
                        <br></br>
                    whether it requires blood, 
                        <br></br> 
                    sweat, and tears (or not), to get the job done!
                </p>
            </section>
 
        </div>
        
    );
}


export default About;