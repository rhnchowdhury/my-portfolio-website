import React from 'react';
import image from '../../assets/about/picture-1.png';
import Contact from '../Contacts/Contact';

const About = () => {
    return (
        <div className="hero mt-8">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:ml-32'>
                    <h1 className="text-5xl font-bold">About Me!</h1>
                    <p className="py-6">I'm a Full-stack web developer with a background in computer science and engineering. Recently, I graduated from the National University on CSE. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more. My expertise includes Javascript, React, Express, Node.js,Firebase Auth and MongoDB.</p>
                    <button className="btn btn-primary"><a href="https://www.linkedin.com/in/md-rhihan-0b350120b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default About;