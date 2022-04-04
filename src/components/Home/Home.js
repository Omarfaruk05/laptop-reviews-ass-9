import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center text-gray-700'>
                <div>
                    <h1 className='text-6xl font-bold'><span className='text-blue-600'>MacBook Pro</span> (16-inch, 2021)</h1>
                    <p className='text-2xl'>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.</p>
                    <button className='font-bold text-xl p-4 text-center bg-blue-100 text-blue-900 rounded-lg mt-8'>MORE DETAILS</button>
                </div>
                <div>
                    <img src="photos/mackbook.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;