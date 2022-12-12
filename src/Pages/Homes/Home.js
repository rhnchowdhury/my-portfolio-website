import React from 'react';
import Contact from '../Contacts/Contact';

const Home = () => {

    return (
        <div className='m-12'>
            <h1 className='text-7xl font-bold'>Hi, <br /> I'm Md. Rhihan</h1>
            <p className='text-2xl font-medium mt-4'>A <span className='text-sky-500'>Full-Stack</span> Web Developer passionate about <br /> creating interactive applications.</p>
            <button className="btn btn-secondary mt-3"><a href="Resume.pdf" download>Resume</a></button>
            <Contact></Contact>
        </div>
    );
};

export default Home;