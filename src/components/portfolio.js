import React from 'react';

function Projects(props) {
    const {projects} = props;

    return(
        <div>
            <h2>Portfolio</h2>
            <section className='portfolio'>
                {projects.map(project => {
                        return(
                            <div className='project'>
                                <img src={project.picture}></img>
                                <h3>{project.name}</h3>
                                <a href={project.github} target='_blank'>Github</a>
                                <a href={project.live} target='_blank'>Deployed</a>
                            </div>
                        );
                    })}
            </section>
        </div>
    );  
};

export default Projects;