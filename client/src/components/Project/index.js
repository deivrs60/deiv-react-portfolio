import React from 'react';
import {FaGithub} from "react-icons/fa";
import sunnyweekend from '../../assets/images/sunnyweekend.png';
import budgettracker from '../../assets/images/budgettracker.png';

export default function ProjectPortfolio() {

    return (
    <section className="row row-cols-1 row-cols-md-2 g-4 py-5 mt-5">

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
                                alt="Sunny Weekend"
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

        {/* new project */}
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

        {/* new project */}
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

        {/* new */}
    </section>
     );
}

