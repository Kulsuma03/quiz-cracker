import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Quiz from './Quiz';
import { QuizTopicContext } from './Root';



const Topics = () => {
    const topics = useContext(QuizTopicContext);
    
    return (
        <div>
            <section className="p-4 lg:p-8  ">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://i.pinimg.com/736x/21/de/6a/21de6aa253ae7842546c9258b5f9495d.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 ">
                        
                        <h3 className="text-3xl text-purple-500 font-bold">why should you need quize?</h3>
                        <p className="my-6 text-black">Quizzes encourage pupils' self awareness of progress and self assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of.</p>
                        <Link to='/' type="button" className="self-end bg-purple-500 hover:bg-purple-700 px-5 text-white
                        fond-bold rounded py-3">Read More</Link>
                    </div>
                </div>
            </div>
        </section>
        <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                
                {
                    topics.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }
                
            </div>
        </div>
        </section>
        </div>
    );
};

export default Topics;