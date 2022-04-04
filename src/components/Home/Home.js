import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const slicedReviews  = reviews.slice(0, 3);
    return (
        <div>
            <div className='mx-8 lg:mx-24  mt-8 md:24 lg:mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center text-gray-700'>
                <div>
                    <h1 className='text-6xl font-bold'><span className='text-blue-600'>MacBook Pro</span> (16-inch, 2021)</h1>
                    <p className='text-2xl'>The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.</p>
                    <button className='font-bold text-xl p-4 text-center bg-blue-100 text-blue-900 rounded-lg mt-8'><a href="https://github.com/Omarfaruk05" target="_blank">MORE DETAILS</a> </button>
                </div>
                <div>
                    <img src="photos/mackbook.png" alt="" />
                </div>
            </div>
            <div  className='m-8 grid gap-8 grid-cols-1 md:grid-cols-3 justify-items-center items-center'>
                {
                   slicedReviews.map(review => <Review key={review.id} review={review}></Review>) 
                }
            </div>
        </div>
    );
};

export default Home;