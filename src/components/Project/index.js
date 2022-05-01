import React from 'react';
import {FaGithub} from "react-icons/fa";
import sunnyweekend from '../../assets/images/sunnyweekend.png';
import budgettracker from '../../assets/images/budgettracker.png';
import readmegenerator from '../../assets/images/readmegenerator.png';
import workdayscheduler from '../../assets/images/workdayscheduler.png';
import ecombackend from '../../assets/images/ecombackend.png';
import onlypets from '../../assets/images/onlypets.png';

export default function ProjectPortfolio() {

    return (
    <section className="row row-cols-1 row-cols-md-2 g-4 py-5 mt-5">
       
        {/* E-Commerce Back-End*/}
        <div className="container-fluid">
            <div className ="row">
                <div className="col-lgg-6- cold-md-6 cold-sm-6 col-xs-12">
                    <div className="hovereffect">
                        <a href="https://young-eyrie-81624.herokuapp.com/Login" target="_bank" rel="noreferrer">
                            <img src ={onlypets} 
                                alt="0nly Pets"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2> 0nlyPets
                                    <a href="https://github.com/alex-d-marten/0nlypets">
                                        <FaGithub />
                                    </a> 
                                </h2>
                                <h3> MERN Stack </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        {/*  SUNNY WEEKEND  */}
        <div className="container-fluid">
            <div className ="row">
                <div className="col-lgg-6- cold-md-6 cold-sm-6 col-xs-12">
                    <div className="hovereffect">
                        <a href="https://deivrs60.github.io/sunny-weekend/" target="_bank" rel="noreferrer">
                            <img src ={sunnyweekend} 
                                alt="Sunny Weekend"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2> Sunny Weekend
                                    <a href="https://github.com/deivrs60/sunny-weekend">
                                        <FaGithub />
                                    </a> 
                                </h2>
                                <h3> HTML, CSS, APIs </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        {/* BUDGET TRACKER  */}
        <div className="container-fluid">
            <div className ="row">
                <div className="col-lgg-6- cold-md-6 cold-sm-6 col-xs-12">
                    <div className="hovereffect">
                        <a href="https://nameless-ravine-96409.herokuapp.com/" target="_bank" rel="noreferrer">
                            <img src ={budgettracker} 
                                alt="Budget Tracker"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2> Budget Tracker
                                    <a href="https://github.com/deivrs60/ubiquitous-garbanzo-budget-tracker">
                                        <FaGithub />
                                    </a> 
                                </h2>
                                <h3> PWA </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        {/* README Generator */}
        <div className="container-fluid">
            <div className ="row">
                <div className="col-lgg-6- cold-md-6 cold-sm-6 col-xs-12">
                    <div className="hovereffect">
                        <a href="https://github.com/deivrs60/to-read-or-not-to-readME" target="_bank" rel="noreferrer">
                            <img src ={readmegenerator} 
                                alt="ReadME Generator"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2> README Generator
                                    <a href="https://github.com/deivrs60/to-read-or-not-to-readME">
                                        <FaGithub />
                                    </a> 
                                </h2>
                                <h3> Node.JS </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        {/* Weather Dashboard */}
        <div className="container-fluid">
            <div className ="row">
                <div className="col-lgg-6- cold-md-6 cold-sm-6 col-xs-12">
                    <div className="hovereffect">
                        <a href="https://deivrs60.github.io/weather-or-not/" target="_bank" rel="noreferrer">
                            <img src ={workdayscheduler} 
                                alt="Weather Dashboard"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2> Weather Dashboard
                                    <a href="https://github.com/deivrs60/weather-or-not">
                                        <FaGithub />
                                    </a> 
                                </h2>
                                <h3> HTML, CSS, APIs, JavaScript, jQuery </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        {/* E-Commerce Back-End*/}
        <div className="container-fluid">
            <div className ="row">
                <div className="col-lgg-6- cold-md-6 cold-sm-6 col-xs-12">
                    <div className="hovereffect">
                        <a href="https://deivrs60.github.io/weather-or-not/" target="_bank" rel="noreferrer">
                            <img src ={ecombackend} 
                                alt="E-Commerce Back-End"
                                className="img-fluid"
                            />
                            <div className="overlay">
                                <h2> E-Commerce Back-End
                                    <a href="https://github.com/deivrs60/weather-or-not">
                                        <FaGithub />
                                    </a> 
                                </h2>
                                <h3> JavaScript, jQuery, Node.JS, NoSQL, Express.JS, insomnia </h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}

