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
                <h1 id="flex-">Hi, 
                        <br></br>
                    My name is 
                        <br></br>
                    David Reyes Santoyo,
                        <br></br>
                    but you can call me Deiv!</h1>
                        <br></br>
                        <br></br>
                <p>
                    I am an aspiring Full-Stack Engineer! 
                        <br></br>
                        <br></br>
                    I'm currently doing some studying on Algorithms!
                        <br></br>
                    Doing my best
                        <br></br>
                    to learn every technology and language I can!
                        <br></br>
                    I am determined 
                        <br></br> 
                    to get my break into tech
                        <br></br>
                    and achieve my dreams
                        <br></br>
                    of contributing to something
                        <br></br>
                     that can possibly change the world!
                </p>
            </section>
 
        </div>
        
    );
}


export default About;