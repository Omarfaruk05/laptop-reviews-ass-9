import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-center items-center my-4 text-normal md:text-xl font-semibold'>
            <CustomLink className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to='/'>HOME</CustomLink> 
            <CustomLink className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to={'/reviews'}>REVIEWS</CustomLink>
            <CustomLink className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to={'/dashboard'}>DASHBOARD</CustomLink>
            <CustomLink className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to={'/blogs'}>BLOGS</CustomLink>
            <CustomLink className='mx-1 md:mx-2 px-1 md:px-2 py-3 border-b-2' to={'/about'}>ABOUT</CustomLink>
        </div>
    );
};

export default Header;