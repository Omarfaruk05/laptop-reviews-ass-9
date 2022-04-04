import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center items-center my-4 text-normal md:text-xl font-semibold'>
            <Link className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to='/'>HOME</Link>
            <Link className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to={'/reviews'}>REVIEWS</Link>
            <Link className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to={'/dashboard'}>DASHBOARD</Link>
            <Link className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to={'/blogs'}>BLOGS</Link>
            <Link className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to={'/about'}>ABOUT</Link>
        </div>
    );
};

export default Header;