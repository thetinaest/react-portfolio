import React from 'react';

function About(props) {
    const {projects} = props;

    return(
        <section href='/about-me'>
            <h2>About Me</h2>
            <section>
                <p>I am a full stack web developer with an ability to quickly learn new technologies. I began learning how to code back in 2017 with C++ and slowly progressed from there.</p>
                <p>In the beginning of 2022 I began a bootcamp through the University of Wisconsin's Extended Campus to learn more about coding and how to use my skills.</p>
                <p>My dream is to become a software developer someday!</p>
            </section>
        </section>
    );  
};

export default About;