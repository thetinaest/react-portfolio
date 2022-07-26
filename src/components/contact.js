import React from 'react';

function Contact(props) {
    const {projects} = props;

    return(
        <section href='/about-me'>
            <h2>Contact Me</h2>
            <section>
                <form>
                <label for="name">First and Last Name:</label><br />
                    <input type="text" id="name" name="name"  placeholder='Name'/><br />
                    <label for="email">Email:</label><br />
                    <input type="text" id="email" name="email" placeholder='Email'/><br />
                    <label for="message">Message:</label><br />
                    <input type="text" id="message" name="message" placeholder='Message'/><br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <a href='tel:3253079334'>(325)307-9334</a>
                <a href='mailto:kristina.r.brennan@gmail.com'>kristina.r.brennan@gmail.com</a>
            </section>
        </section>
    );  
};

export default Contact;