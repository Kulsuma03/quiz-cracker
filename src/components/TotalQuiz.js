import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { QuizTopicContext } from './Root';
import './TotalQuiz.css'


const TotalQuiz = () => {
    const totalQuizData = useContext(QuizTopicContext);
    // console.log(totalQuizData)
    return (
        <div className='w-9/12 mx-auto chart'>
            <h1 className='fond-bold text-purple-500 text-2xl mt-2 underline'> Quizzes Statistics </h1>
            
                
               <ResponsiveContainer  width={'100%'} height={400}>
               <AreaChart
                    className='main-chart'
                    width={500}
                    height={200}
                    data={totalQuizData}
                    syncId="anyId"
                    margin={{
                        top: 50,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
               </ResponsiveContainer>
               
            
        </div>
    );
};

export default TotalQuiz;