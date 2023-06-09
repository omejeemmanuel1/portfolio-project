import React from 'react'
import Image from '../assets/me1.png';
import Typewriter from 'typewriter-effect';
import { HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';
import '../App.css';
import Skills from './Skills';
import Contact from './Contact';
import Project from "./Project";
import About from "./About";
import NavBar from './NavBar';


const Home = () =>{
  return (
    <div className='home'>
    <NavBar />
    <section id="hero" name="home">
        <div className="overflow-hidden w-full mx-auto container flex flex-col-reverse  pt-10 items-center px-6 space-y-0 md:space-y-0 font-pacifico md:flex-row">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="pr-2 pb-2max-w-md pt-20 text-5xl text-center md:text-5xl md:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-gray-300">
                    Hello, I'm Emmanuel. I'm a fullstack software engineer...
                </h1>
                <p className="max-w-sm text-center text-sky-100 md:text-left">
                    <Typewriter onInit= {(typewriter) => {
                    typewriter.typeString("Experienced software engineer skilled in both frontend and backend development. Proficient in building scalable and secure backend systems, designing intuitive user interfaces, and working with databases, cloud-based infrastructure, and agile methodologies. Passionate about emerging technologies and committed to continuous improvement.")
                    .start()
                    }} />
                   
                </p>
                 <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to='projects' smooth={true} duration={500}>
                View Work
            </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
           </div>
           <div className="md:w-2/6 ml-8 hidden relative -top-20 md:flex">
                <img src={Image} alt="Emmanuel" />
            </div>
        </div>
        <About />
         <Skills />
        <Project />
        <Contact />
      
    </section>
    </div>
  )
}

export default Home



