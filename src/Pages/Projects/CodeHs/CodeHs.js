import React from 'react';
import img1 from '../../../assets/codehs/img1.PNG';
import img2 from '../../../assets/codehs/img2.PNG';
import img3 from '../../../assets/codehs/img3.PNG';

const CodeHs = () => {
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
                        <h1 className="text-5xl font-bold">CodeHS</h1>
                        <p className="py-6">CodeHS is an e-Learning Institute is a virtual destination for professionals in various areas of higher education to meet ongoing professional development needs and to gain access to the most current research in academy.<br /> <br /> CodeHS courses teach students applicable computer science skills. With a focus on helping students develop problem solving and computational thinking skills, students come away both with a knowledge of professional programming languages and the conceptual understanding needed to learn new languages.<br /> <br /> CodeHS offers the most comprehensive course pathway across grades 6-12, starting with introductory level block programming courses all the way up to AP level text-based programming courses in many languages.</p>
                        <h3 className="text-3xl font-bold">Features:</h3>
                        <ul className='mt-4'>
                            <li>1. Responsive design: desktop, tablet & smartphone layouts</li>
                            <li>2. Used Bootstrap for building this website</li>
                            <li>3. It Has many courses, you can enroll anyone of this course.</li>
                            <li>4. It's e-learning website.</li>
                            <li>5. You can see successful students.</li>
                            <li>6. It has FAQ part where you can ask any type of questions.</li>
                        </ul>
                        <p className='mt-4 mb-4'>Live Link: <a href="https://online-education-7c52f5.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-amber-700'>https://online-education-7c52f5.netlify.app/</a></p>
                        <p>GitHub Code Link: <a href="https://github.com/rhnchowdhury/Online-education-site" target="_blank" rel="noopener noreferrer" className='text-amber-700'>https://github.com/rhnchowdhury/CodeHS</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeHs;