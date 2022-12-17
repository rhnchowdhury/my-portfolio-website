import React from 'react';
import img1 from '../../../assets/life/img1.png'
import img2 from '../../../assets/life/img2.PNG'
import img3 from '../../../assets/life/img3.PNG'

const DailyLife = () => {
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
                        <h1 className="text-5xl font-bold">Simple Life Way</h1>
                        <p className="py-6">Daily-life is a activity web app. See what you are doing in every day and calculate it very easily.Experience a unique and elegant theme that reflects the creativity in a different style.Easily Customizable.<br /> <br /> Designed with eye-catching graphics and lots of amazing features, this is just irresistible. Get it now and create a buzz before you launch your website.</p>
                        <h3 className="text-3xl font-bold">Features:</h3>
                        <ul className='mt-4'>
                            <li>1. Responsive design: desktop, tablet & smartphone layouts</li>
                            <li>2. Used Bootstrap for building this website</li>
                            <li>3. It Has Calculating System</li>
                            <li>4. It Used toaster to notify.</li>
                            <li>5. Can see one's activity time and calculate.</li>
                        </ul>
                        <p className='mt-4 mb-4'>Live Link: <a href="https://daily-life-activities.netlify.app/" target="_blank" rel="noopener noreferrer" className='text-amber-700'>https://daily-life-activities.netlify.app/</a></p>
                        <p>GitHub Code Link: <a href="https://github.com/Programming-Hero-Web-Course4/b6-ultra-active-club-rhnchowdhury" target="_blank" rel="noopener noreferrer" className='text-amber-700'>https://github.com/rhnchowdhury/Simple-Life</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyLife;