import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, name, total } = quiz;
    return (
        <div>
            <div className="overflow-hidden transition-shadow duration-300 bg-gray-200 hover:bg-gray-100 rounded shadow-md">
                <img
                    src={logo}
                    className="object-cover w-full "
                    alt=""
                />
                <div className="p-5 border border-t-0">
                    <div className='flex items-center justify-between mb-5 '>
                        <p className='fond-bold text-xl text-purple-500'> {name} </p>
                        <p className="font-semibold tracking-wide ">
                            Total Quiz: <span className='text-bold text-purple-500'> {total}</span>
                        </p>
                    </div>
                    <Link className='bg-purple-500 hover:bg-purple-700 py-3 fond-bold text-white rounded  px-6 '>Start Quiz</Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;