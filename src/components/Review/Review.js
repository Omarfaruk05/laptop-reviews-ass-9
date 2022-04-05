import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({review}) => {
    
    return (
        <div className=' relative rounded-lg w-80 h-96 shadow-2xl p-4 f'>
            <div>
                <img className='rounded-lg' src={review.photo} alt="" />
            </div>
            <div>
                    <h2 className='text-xl mt-2 font-semibold text-blue-800'>{review.name}</h2>
                    <p>{review.comment}</p>
                    <div className='absolute bottom-4 text-bold text-lg'>
                        <p>Rating:
                        <Rating 
                        initialRating={review.rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{color: '#fcaa15'}} icon={faStar} />}
                        readonly
                        ></Rating>
                        </p>
                    </div>
            </div>
        </div>
    );
};

export default Review;