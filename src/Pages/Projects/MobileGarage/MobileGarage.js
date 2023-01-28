import React from 'react';
import img1 from '../../../assets/garage/img1.png';
import img2 from '../../../assets/garage/img2.png';
import img3 from '../../../assets/garage/img3.png';

const MobileGarage = () => {
    return (
        <div className='mt-5 lg:m-20'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={img1} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                        <img src={img2} alt='' className="max-w-sm rounded-lg shadow-2xl my-6" />
                        <img src={img3} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className=' lg:ml-16 lg:mb-auto'>
                        <h1 className="text-5xl font-bold">Mobile Garage</h1>
                        <p className="py-6">Mobile Garage is a responsive website for any kind of Mobile services. Built with the latest HTML5 and CSS3 standards. You can buy and sell used phone by this website. You also can swap the phones.</p>
                        <h3 className="text-3xl font-bold">Features:</h3>
                        <ul className='mt-4'>
                            <li>1. Responsive design: desktop, tablet & smartphone layouts</li>
                            <li>2. Used Tailwind Css for building this website</li>
                            <li>3. It has Login System With FireBase</li>
                            <li>4. For creating server API it's being used Express & Node JS</li>
                            <li>5. It's data stored in MongoDB</li>
                            <li>6. It has review form</li>
                            <li>7. Review can be edited and deleted</li>
                        </ul>
                        <p className='mt-4 mb-4'>Live Link: <a href="https://firts-firebase-proect.web.app/" target="_blank" rel="noopener noreferrer" className='text-orange-600'>https://firts-firebase-proect.web.app/</a></p>
                        <p>GitHub Code Link: <a href="https://github.com/rhnchowdhury/Mobile-Garage-client" target="_blank" rel="noopener noreferrer" className='text-orange-600'>https://github.com/rhnchowdhury/Mobile-garage</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileGarage;