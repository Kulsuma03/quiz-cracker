import React from 'react';
import quiz from './quizz.webp'


const Topics = () => {
    return (
        <section className="p-4 lg:p-8  ">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src={quiz} alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 ">
                        <span className="text-xs uppercase text-black">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-end bg-sky-700 px-9 rounded py-3">Action</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Topics;