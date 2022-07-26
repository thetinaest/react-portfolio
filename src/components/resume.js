import React from 'react';

function Resume(props) {
    const {resume} = props;
    return(
        <section className='skills'>
            <h2>Proficiencies</h2>
            <div className='backEnd'>
                <h3>Back-End: </h3>
                <ul>
                    <li>MERN</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>Apollo Server</li>
                    <li>Express.js</li>
                    <li>Sequelize</li>
                    <li>PHP</li>
                </ul>
            </div>
            <div className='frontEnd'>
                <h3>Front-End: </h3>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML and CSS</li>
                    <li>React</li>
                    <li>PHP</li>
                </ul>
            </div>
            <div className='download'>
                <button><a href={resume.link} download>Download my Resume here!</a></button>
            </div>
        </section>
    );  
};

export default Resume;