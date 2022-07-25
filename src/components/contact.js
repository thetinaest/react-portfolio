import React from 'react';

function Contact(props) {
    const {projects} = props;

    return(
        <section href='/about-me'>
            <h2>Contact Me</h2>
            <section>
                <a href='tel:3253079334'>(325)307-9334</a>
                <a href='mailto:kristina.r.brennan@gmail.com'>kristina.r.brennan@gmail.com</a>
            </section>
        </section>
    );  
};

export default Contact;