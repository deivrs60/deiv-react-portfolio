import React from 'react';
import {FaGithub} from "react-icons/fa";
import sunnyweekend from '../../assets/images/sunnyweekend.png';


export default function ProjectPortfolio() {

    return (
    <section className="row row-cols-1 row-cols-md-2 g-4 py-5 mt-5">
        <div className="container-fluid">

            <div className ="row">
                <div class="col-lgg-6- cold-md-6 cold-sm-6 col-xs-12">
                    <div class="hovereffect">
                        <a href="https://deivrs60.github.io/sunny-weekend/" target="_bank" rel="noreferrer">
                            <img src ={sunnyweekend} 
                                alt="Sunny Weekend"
                                className="img-fluid"
                            />
                            <div class="overlay">
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
    </section>
     );
}

