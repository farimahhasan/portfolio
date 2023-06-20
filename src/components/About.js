import React from 'react';
import "../assets/css/all.css";
import chevron from '../assets/icon/chevron.svg';
import me from '../assets/image/farimah.jpg';

const About = () => {

    return (
        <section id="about" className="about">
        <div className="containerAll">
            <div className="section-title">
                <h2>About</h2>
                <p>Learn more about me</p>
            </div>
            <div className="contentContainer">
                <div className="containerImageMe" >
                    <img id="me" src={me} alt="me" />
                </div>
                <div className="content">
                    <h3>Web Developer</h3>
                    <p>
                        Front End (html,css,javascript)  .
                    </p>
                    <div className="aboutPerson">
                        <div>
                            <ul className="p-0">
                                <li className="d-flex align-items-center"><img src={chevron} alt="icon chevron"/> <strong>Birthday: 15 June 2000</strong></li>
                                <li className="d-flex align-items-center"><img src={chevron} alt="icon chevron"/> <strong>https://farimahhasan.netlify.app</strong></li>
                                <li className="d-flex align-items-center"><img src={chevron} alt="icon chevron"/> <strong>Phone: <a href='tel:+989022213791'>+98 9022213791</a></strong></li>
                                <li className="d-flex align-items-center"><img src={chevron} alt="icon chevron"/> <strong>City: Tehran , Iran</strong></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="p-0">
                                <li className="d-flex align-items-center"><img src={chevron} alt="icon chevron"/> <strong>Age: 23</strong></li>
                                <li className="d-flex align-items-center"><img src={chevron} alt="icon chevron"/> <strong>Degree: middle-level</strong></li>
                                <li className="d-flex align-items-center"><img src={chevron} alt="icon chevron"/> <strong>Email:  <a href='mailto:farimah.hsni@gmail.com'>farimah.hsni@gmail.com</a></strong></li>
                                <li className="d-flex align-items-center"><img src={chevron} alt="icon chevron"/> <strong>Freelance: Available</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-title skill">
                      <h2>skills</h2>
                   </div>
                   <div className='progressContent'>
                     <span>HTML</span>
                     <span>90%</span>
                   </div>
                   <div className='progress html'>

                   </div>
                   <div className='progressContent'>
                     <span>CSS</span>
                     <span>90%</span>
                   </div>
                   <div className='progress css'>

                   </div>
                   <div className='progressContent'>
                     <span>BOOTSTRAP</span>
                     <span>90%</span>
                   </div>
                   <div className='progress bootstrap'>

                   </div>
                   <div className='progressContent'>
                     <span>JAVASCRIPT</span>
                     <span>70%</span>
                   </div>
                   <div className='progress javascript'>

                   </div>

                   <div className='progressContent'>
                     <span>SASS</span>
                     <span>70%</span>
                   </div>
                   <div className='progress sass'>

                   </div>
                   <div className='progressContent'>
                     <span>GIT</span>
                     <span>60%</span>
                   </div>
                   <div className='progress git'>

                   </div>
                   
                   <div className='progressContent'>
                     <span>REACT</span>
                     <span>60%</span>
                   </div>
                   <div className='progress react'>

                   </div>
                </div>
            </div>

        {/*    <div className="row skills-content">

                <div className="col-md-6">

                    <div>
                        <span class="skill d-block">HTML <span class="val">95%</span></span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div>
                        <span class="skill d-block">CSS <span class="val">95%</span></span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div>
                        <span class="skill d-block">Bootstrap <span class="val">95%</span></span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                </div>

                <div class="col-md-6">

                    <div>
                        <span class="skill d-block">JavaScript <span class="val">70%</span></span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                    <div>
                        <span class="skill d-block">Asp.net mvc<span class="val">75%</span></span>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    </section>

    );
};

export default About;