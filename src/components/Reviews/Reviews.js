import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    
    const[reviews] = useReviews()

    return (
       <div>
           <h1 className='flex justify-center text-3xl font-bold mt-12'>Customars Review({reviews.length})</h1>
            <div className='m-8 mt-8 lg:mx-80 md:mx-24  grid gap-8 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
       </div>
    );
};

export default Reviews;