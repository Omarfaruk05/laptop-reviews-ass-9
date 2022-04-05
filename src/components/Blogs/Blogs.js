import React from 'react';

const Blogs = () => {
    return (
        <div className='m-4 mt-8 md:m-12 lg:m-24 font-semibold text-gray-700'>
            <div>
                <h1 className='text-4xl my-4'>1. What is context api</h1>
                <p className='text-lg'> <span className='text-red-400 mr-2'>Answer:</span> Context api provides us to pass data without useing porps. We know without passing data in child element react cannot pass data directly.For solving this problem react creat this context api. In this api we can pass data directly without useing props and we can pass data everywhere in our component. </p>
            </div>
            <div>
                <h1 className='text-4xl my-4'>2. What is semantic tag?</h1>
                <p className='text-lg'> <span className='text-red-400 mr-2'>Answer:</span> Semantic tags are that type of elements which are clearly describe its meaning to both the browser and tha developer. In HTML there are some semantic elements that be used to define different parts of a web page . </p>
                <ol className='text-blue-900'>
                    <li>article</li>
                    <li>aside</li>
                    <li>footer</li>
                    <li>main</li>
                    <li>nav</li>
                    <li>section</li>
                </ol>
            </div>
            <div>
                <h1 className='text-4xl my-4'>3. Difference between inline and inline-block element.</h1>
                <p><span className='text-red-400 mr-2'>Answer:</span> </p>
                <div className='flex'>
                    <div className='border-2 p-4'>
                        <h1 className='text-3xl my-4  text-cyan-500'>Inline</h1>
                        <div>
                            <ol className='mt-8'>
                                <li>1. In inlien we cannot use top and bottom margin.</li>
                                <li>2. We cannot set it's height and width.</li>
                            </ol>
                        </div>
                    </div>
                    <div className='border-2 p-4'>
                        <h1 className='text-3xl my-4 text-cyan-500'>Inline-block</h1>
                        <div>
                            <ol className='mt-8'>
                                <li>1. In inlien.block we can use top and bottom margin.</li>
                                <li>2. We can set it's height and width.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;