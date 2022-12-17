import React from 'react';
import img1 from '../../../assets/sage/img1.png';
import img2 from '../../../assets/sage/img2.png';
import img3 from '../../../assets/sage/img3.png';

const Sage = () => {
    return (
        <div className='mt-5 lg:m-20'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={img1} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                        <img src={img2} alt='' className="max-w-sm rounded-lg shadow-2xl my-5" />
                        <img src={img3} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className='ml-8 lg:ml-16 lg:mb-auto'>
                        <h1 className="text-5xl font-bold">Programming Sage</h1>
                        <p className="py-6">Programming Sage is a computer programming language with features covering many aspects of languages, including C, Java, Python, JavaScript, PHP, Kotlin and Swift. <br /> <br /> This website is design for learning programming language courses. If you want to learn about programming you can enroll this site. This tutorial is one of many sources of information for learning about how to use programming. <br /> <br /> Since this is a tutorial introduction to Sage, we will be using examples to demonstrate ideas and the reader is encouraged to follow along as we progress by entering the commands into their own copy of Sage. We have tried to include exercises for practice and problems for more extensive exploration of a given topic. The reader is also encouraged to do many of these. </p>
                        <h3 className="text-3xl font-bold">Features:</h3>
                        <ul className='mt-4'>
                            <li>1. Responsive design: desktop, tablet & smartphone layouts</li>
                            <li>2. Used Tailwind Css for building this website</li>
                            <li>3. It has Login System With FireBase</li>
                            <li>4. For creating server API it's being used Express & Node JS</li>
                            <li>5. It's data stored in MongoDB</li>
                            <li>6. It has Review section, you can add your review.</li>
                            <li>7. It also has Add course section, you can add your course.</li>
                        </ul>
                        <p className='mt-4 mb-4'>Live Link: <a href="https://programming-sage-fbf73.web.app/" target="_blank" rel="noopener noreferrer" className='text-rose-600'>https://programming-sage-fbf73.web.app/</a></p>
                        <p>GitHub Code Link: <a href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-rhnchowdhury" target="_blank" rel="noopener noreferrer" className='text-rose-600'>https://github.com/rhnchowdhury/Programming-Sage</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sage;