import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Navbar } from './Navbar';

export const QuizTopicContext = createContext('a')

const Root = () => {
    const topics = useLoaderData()
    console.log(topics.data)
    return (
        <div>
            <QuizTopicContext.Provider value={topics.data}>
                <Navbar />
                <Outlet />
            </QuizTopicContext.Provider>
        </div>
    );
};

export default Root;