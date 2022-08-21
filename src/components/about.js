import React from 'react';
import { useEffect, useState } from 'react';

function About(props) {
    const {avatar} = props;
    const words = ['MERN Stack Developer', 'PWA Developer', 'Node.js Developer', 'React Developer', 'Full Stack Developer'];
    const[index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);


      useEffect(() => {
        if (
          index === words.length - 1 &&
          subIndex === words[index].length
          ) {
            return;
          }
        if (
          subIndex === words[index].length + 1 &&
          index !== words.length - 1 &&
          !reverse
          ) {
            setReverse(true);
            return;
           }
         
        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prev) => prev + 1);
          return;
           }
         const timeout = setTimeout(() => {
         setSubIndex((prev) => prev + (reverse ? -1 : 1));
         }, 150);
         
         return () => clearTimeout(timeout);
         }, [subIndex, index, reverse]);

    return(
        <section className='about'>
            <h2>About Me</h2>
            <h3>
                {`${words[index].substring(0, subIndex)}|`}
            </h3>
            <div>
                <img className='avatar' src={avatar.picture} alt={avatar.alt}></img>
                <p>
                A few years ago, I began learning to code in C++ just for entertainment. I had plently of difficulty and failures along the way but I realized quickly that even though the challenges of learning something new, I had developed a passion for what I was creating.<br/><br/>
                After some time learning new technologies on my own, I had the opportunity to move into a web development position within my company. Shortly after, I enrolled in and completed a rigorous coding bootcamp through the University of Wisconsin.<br/><br/>
                I am now continuing to work on my own personal projects while gaining experience working professionally as a web developer.</p>
            </div>
            <a href='https://www.linkedin.com/in/kristina-b-ba38851b7/' target='_blank'> <i class="fa-brands fa-linkedin"></i></a>
            <a href='https://github.com/thetinaest' target='_blank'><i class="fa-brands fa-github"></i></a>
        </section>
    );  
};

export default About;