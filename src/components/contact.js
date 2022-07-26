import React from 'react';
import { useState } from 'react';

function Contact(props) {
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value !== '' && email.value !== '' && message.value !== '') {
            setError('Information submitted. Thank you!');
        }

        name.value = '';
        email.value = '';
        message.value = '';
    }

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
        <section>
            <h2>Contact Me</h2>
            <section>
                <form id="form" onSubmit={handleSubmit}>
                    <label for="name">First and Last Name:</label><br />
                        <input type="text" id="name" name="name"  placeholder='Name' onBlur={handleChange}/><br />
                        <label for="email">Email:</label><br />
                        <input type="text" id="email" name="email" placeholder='Email' onBlur={handleChange}/><br />
                        <label for="message">Message:</label><br />
                        <input type="text" id="message" name="message" className='message' placeholder='Message' onBlur={handleChange}/><br />
                        <p id='error'>{error}</p>
                        <button type="submit" value="Submit">Submit</button>
                </form>
                <div className='contact'>
                    <a href='tel:3253079334'><i class="fa-solid fa-phone"></i></a>
                    <a href='mailto:kristina.r.brennan@gmail.com'><i class="fa-solid fa-envelope"></i></a>
                </div>
            </section>
        </section>
    );  
};

export default Contact;