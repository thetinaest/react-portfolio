import React from 'react';
import { useState } from 'react';

function Contact(props) {
    function handleSubmit(e) {
        e.preventDefault();
    }

    const [error, setError] = useState('');
    function handleChange(e) {
        if(e.target.value !== '') {
            setError('');
        }

        if (e.target.name === 'name' && e.target.value === '') {
            setError('Please enter your first and last name');
        } else if(e.target.name === 'email' && e.target.value === '') {
            setError('Please enter a valid email.');
        } else if(e.target.name === 'message' && e.target.value === '') {
            setError('Please enter a message');
        }

    }

    return(
        <section href='/about-me'>
            <h2>Contact Me</h2>
            <section>
                <form id="form" onSubmit={handleSubmit}>
                    <label for="name">First and Last Name:</label><br />
                        <input type="text" id="name" name="name"  placeholder='Name' onBlur={handleChange}/><br />
                        <label for="email">Email:</label><br />
                        <input type="text" id="email" name="email" placeholder='Email' onBlur={handleChange}/><br />
                        <label for="message">Message:</label><br />
                        <input type="text" id="message" name="message" className='message' placeholder='Message' onBlur={handleChange}/><br /><br />
                        <p id='error'>{error}</p>
                        <button type="submit" value="Submit">Submit</button>
                </form>
                <a href='tel:3253079334'>(325)307-9334</a>
                <a href='mailto:kristina.r.brennan@gmail.com'>kristina.r.brennan@gmail.com</a>
            </section>
        </section>
    );  
};

export default Contact;