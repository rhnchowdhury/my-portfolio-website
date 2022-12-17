import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contacts/Contact';

const Blog = () => {
    return (
        <div className='mt-12 lg:m-44'>
            <h1 className="text-5xl font-bold text-center text-purple-600">Coming Soon</h1>
            <div className='ml-48 mt-5 lg:ml-96'>
                <button className="btn btn-error"><Link to='/' className='text-white'>Back to Home</Link></button>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Blog;