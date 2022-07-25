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
    name: "Contact Me",
    link: "/contact-me"
  },
  {
    name: "Resume",
    link: '/resume'
  }
]

const projects = [
  {
    name: 'Book Bits',
    github: 'https://github.com/Mazattack1999/book-bits',
    live: 'https://book-bits-blog.herokuapp.com/'
  }, 
  {
    name: 'Tunaluze',
    github: 'https://github.com/thetinaest/Tunalyze',
    live: 'https://thetinaest.github.io/Tunalyze/'
  }, 
  {
    name: 'Weather Dashboard',
    github: 'https://github.com/thetinaest/weather-dashboard',
    live: 'https://thetinaest.github.io/weather-dashboard/'
  },
  {
    name: 'Code Quiz',
    github: 'https://github.com/thetinaest/code-quiz',
    live: 'https://thetinaest.github.io/code-quiz/'
  }
]

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
          {curOption.name === 'About Me' && <About/>}
          {curOption.name === 'Portfolio' && <Portfolio projects={projects}></Portfolio>}
          {curOption.name === 'Contact Me' && <Contact/>}
          {curOption.name === 'Resume' && <Resume/>}
          <Footer></Footer>
        </main>

    </>
  );
}

export default App;
