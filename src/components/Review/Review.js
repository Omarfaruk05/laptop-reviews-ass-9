import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({review}) => {
    
    return (
        <div className=' relative border-4 h-96 shadow-lg p-4 f'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                    <h2 className='text-xl'>{review.name}</h2>
                    <p>{review.comment}</p>
                    <div className='absolute bottom-4 text-bold text-lg'>
                        <p>Rating:
                        <Rating 
                        initialRating={review.ratting}
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