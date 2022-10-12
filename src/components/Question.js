import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'


const Question = ({ questions }) => {
    const { options, question, correctAnswer, id } = questions;
    const question1 = question.split('<p>');
    const question2 = (question1[1]).split('</p>')

    const handleAns = option => {
        if (option === correctAnswer) {
            toast.success(' Great!!! Your Answer is Correct', { autoClose: 1000 });
        } else {
            toast.warning('Ops!!! Your Answer is Wrong', { autoClose: 1000 });
        }
    }

    const handleCorrectAns = (question) => {
        const answer = question.correctAnswer;
        toast.success(('Correct Answer is => '+ answer), { autoClose: 1000 })

    }

    return (
        <div className=''>
            <div className='w-11/12 md:w-6/12 mx-auto  my-12 bg-gray-100 rounded-xl p-8 shadow-lg'>

                <div className='text-xl text-purple-500 fond-bold'>
                    {
                        question2[0]
                    }
                </div>
                <div className='my-11 bg-gray-200 rounded-lg p-5'>
                    <div onClick={() => handleCorrectAns(questions)} className='w-6 h-6 ml-auto'>
                        <EyeIcon className="h-6 w-6 text-purple-500" />
                    </div>
                    <div className='grid gap-4 lg:grid-cols-2 mt-9   mx-auto'>
                        {
                            options.map((option, index) =>

                                    <button key={index}className='flex items-start m-1 hover:bg-purple-300 bg-gray-300 p-4 rounded-md'>
                                        <input className='mt-2 mr-1 ' type="radio" id={option} name={id} />
                                        <label onClick={() => handleAns(option)} htmlFor={option} className='mt-0'>{option}</label>
                                    </button>
                            )
                        }
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Question;