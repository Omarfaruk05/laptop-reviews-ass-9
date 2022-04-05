import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    // const reviews = [
    //     {
    //         id: 1,
    //         name: "Rasel Hassan",
    //         comment:"This laptp's fearur is good. Laptop look good for slim design",
    //         ratting: 4,
    //         photo:""
    //     },

    //     {
    //         id: 2,
    //         name: "Nymut Khan Tonmoy",
    //         comment:"Laptop look good for it's slim design. But over priced.",
    //         ratting: 3,
    //         photo:""
    //     },

    //     {
    //         id: 3,
    //         name: "Shariful Islam",
    //         comment:"I love apple products. This leatest parduct configeration is perfect for a content creator.",
    //         ratting: 5,
    //         photo:""
    //     },

    //     {
    //         id: 4,
    //         name: "Abul Hasnat Hasib",
    //         comment:"I am useing this laptop for my office. It works very smoothly. ",
    //         ratting: 5,
    //         photo:""
    //     },

    //     {
    //         id: 5,
    //         name: "Hasibul Hassan Emon",
    //         comment:"My father bought this laptop. It looks very cool.",
    //         ratting: 4,
    //         photo:""
    //     },

    //     {
    //         id: 6,
    //         name: "Md. Saiful Islam",
    //         comment:"I bought this laptop. This laptop's screen is very good. Also keyboard and mouse are really comfortable.",
    //         ratting: 5,
    //         photo:""
    //     }
    // ];
    
    const[reviews] = useReviews();

    return (
       <div>
           <h1 className='flex justify-center text-3xl font-bold mt-12'>Customars Reviews({reviews.length})</h1>
            <div className='m-8 mt-8 lg:mx-80 md:mx-24  grid gap-8 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
       </div>
    );
};

export default Reviews;