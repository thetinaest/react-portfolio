import './App.css';
import { useState } from 'react';
import Nav from './components/nav.js';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Resume from './components/resume';


const options = [
  {
    name: "About Me",
    link: "/about-me"
  },
  {
    name: "Portfolio",
    link: "/portfolio"
  },
  {
    name: "Resume",
    link: '/resume'
  }
]

const projects = [
  {
    name: "Jessie's List",
    github: 'https://github.com/thetinaest/chores-app',
    live: 'https://nameless-inlet-86757.herokuapp.com/',
    picture: require('./assets/choresList.png')
  },
  {
    name: 'Book Bits',
    github: 'https://github.com/Mazattack1999/book-bits',
    live: 'https://book-bits-blog.herokuapp.com/',
    picture: require('./assets/book-bits-homepage.png')
  }, 
  {
    name: 'Tunalyze',
    github: 'https://github.com/thetinaest/Tunalyze',
    live: 'https://thetinaest.github.io/Tunalyze/',
    picture: require('./assets/tunalyze.PNG')
  }, 
  {
    name: 'Weather Dashboard',
    github: 'https://github.com/thetinaest/weather-dashboard',
    live: 'https://thetinaest.github.io/weather-dashboard/',
    picture: require('./assets/weather-dashboard.png')
  },
  {
    name: 'Code Quiz',
    github: 'https://github.com/thetinaest/code-quiz',
    live: 'https://thetinaest.github.io/code-quiz/',
    picture: require('./assets/coding-quiz.png')
  },
  {
    name: 'Calendar',
    github: 'https://github.com/thetinaest/calendar',
    live: 'https://thetinaest.github.io/calendar/',
    picture: require('./assets/calendar.png')
  },
  {
    name: 'Password Generator',
    github: 'https://github.com/thetinaest/password-generator',
    live: 'https://thetinaest.github.io/password-generator/',
    picture: require('./assets/password-generator.png')
  }
]

const avatar = {
  alt: 'kristina holding her dog',
  picture: require('./assets/kristina.jpg')
}

const resume = {
  resume: require('./assets/Profile.pdf'),
  link: './assets/Profile.pdf'
}

function App() {
  const [curOption, setCurOption] = useState(options[0]);

  return (
    <>
        <Nav
          options={options}
          curOption={curOption}
          setCurOption={setCurOption}
        ></Nav>
        <main>
          {curOption.name === 'About Me' && <About avatar={avatar}/>}
          {curOption.name === 'Portfolio' && <Portfolio projects={projects}></Portfolio>}
          {curOption.name === 'Contact Me' && <Contact/>}
          {curOption.name === 'Resume' && <Resume resume={resume}/>}
          {/* <Footer></Footer> */}
        </main>

    </>
  );
}

export default App;
