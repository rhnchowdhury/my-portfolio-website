import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/projects/img1.png';
import img2 from '../../assets/projects/img2.png';
import img3 from '../../assets/projects/img3.png';
import img4 from '../../assets/projects/img4.png';
import Contact from '../Contacts/Contact';

const Project = () => {
    return (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Mobile Garage</h2>
                    <p>A mobile garage involves a mechanic who performs mobile repairs and maintenance in the customer's desired.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to='/garage'>Details</Link></button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Programming Sage</h2>
                    <p>It covering many aspects of languages, including C, Java, Python, JavaScript, PHP, Kotlin and Swift.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to='/sage'>Details</Link></button>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img3} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Daily Life</h2>
                    <p>Daily-life is a activity web app. See what you are doing in every day and calculate it very easily.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to='/life'>Details</Link></button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img4} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">CodeHS</h2>
                    <p>CodeHS is about providing excellent teaching and learning opportunities in
                        computer science for students all over the world.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary"><Link to='/code'>Details</Link></button>
                    </div>
                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Project;