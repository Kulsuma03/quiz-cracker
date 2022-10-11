import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';
import { QuizTopicContext } from './Root';

const QuizDetails = () => {

    const questionsData = useLoaderData();
    const questions = questionsData.data.questions
    // console.log(questions)


    return (
        <div>
            {
                questions.map(question => <Question
                key={question.id}
                questions={question}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetails;