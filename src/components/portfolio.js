import React from 'react';

function Projects(props) {
    const {projects} = props;

    return(
        <section>
            <h2>Portfolio</h2>
                {projects.map(project => {
                    return(
                        <div>
                            <h3>{project.name}</h3>
                            <a href={project.github}>Github</a>
                            <a href={project.live}>Live Deployment</a>
                        </div>
                    );
                })}
        </section>
    );  
};

export default Projects;