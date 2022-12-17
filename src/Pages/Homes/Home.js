import React from 'react';
import Contact from '../Contacts/Contact';
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

const Home = () => {

    return (
        <div className='m-12'>
            <h1 className='text-7xl font-bold'>Hi, <br /> I'm Md. <span className='text-purple-600'>Rhihan</span></h1>
            <p className='text-2xl font-medium mt-4'>A <span className='text-purple-600'>Front-End Web Developer</span> passionate about <br /> creating interactive applications.</p>
            <div className='flex mt-6'>
                <button className="btn btn-circle w-32 bg-purple-600"><a href="Resume.pdf" download>Resume</a></button>
                <div className='flex mt-2 ml-10'>
                    <a href="https://www.linkedin.com/in/md-rhihan-0b350120b/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='w-20 h-10 text-purple-600'></FaLinkedin></a>
                    <a href="https://github.com/rhnchowdhury" target="_blank" rel="noopener noreferrer"><GoMarkGithub className='w-20 h-10 text-purple-600'></GoMarkGithub></a>
                    <a href="https://twitter.com/RaiHaNC19029735" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-20 h-10 text-purple-600'></FaTwitter></a>
                </div>
            </div>
            <h1 className='mt-16 text-3xl font-semibold text-purple-600'>SKILLS</h1>
            <div className='mt-12 lg:ml-12 lg:shadow-2xl rounded-3xl p-6'>
                <ul className='grid grid-cols-3 lg:grid-cols-5 gap-6 m-12'>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://alexcalia.com/assets/skills/html.svg" alt="" />
                        <p className='ml-2'>HTML</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://alexcalia.com/assets/skills/css.svg" alt="" />
                        <p className='ml-3'>CSS</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://alexcalia.com/assets/skills/javascript.svg" className='w-37 h-12' alt="" />
                        <p>Javascript</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://alexcalia.com/assets/skills/react.svg" className='w-37 h-12' alt="" />
                        <p>React</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://img.favpng.com/16/11/19/node-js-javascript-web-application-express-js-computer-software-png-favpng-cYmJvJyBDcTNbLdSRdNAceLyW.jpg" className='w-37 h-12' alt="" />
                        <p>Node</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://alexcalia.com/assets/skills/api.svg" className='w-37 h-12' alt="" />
                        <p>Rest API</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://alexcalia.com/assets/skills/git.svg" className='w-37 h-12' alt="" />
                        <p className='ml-4'>Git</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://alexcalia.com/assets/skills/firebase.svg" className='w-37 h-12' alt="" />
                        <p>Firebase</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://icon2.cleanpng.com/20180402/cjw/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915d780ea2.2723311115227006374918.jpg" className='w-37 h-12' alt="" />
                        <p>MongoDB</p>
                    </li>
                    <li className='lg:shadow-2xl lg:p-5 lg:m-10 lg:rounded-2xl'>
                        <img src="https://alexcalia.com/assets/skills/vscode.svg" className='w-37 h-12' alt="" />
                        <p>Vs Code</p>
                    </li>
                </ul>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Home;