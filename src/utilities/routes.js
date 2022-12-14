import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import QuizDetails from "../components/QuizDetails";
import Root from "../components/Root";
import Topics from "../components/Topics";
import TotalQuiz from "../components/TotalQuiz";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Topics/>
            },
            {
                path: '/topics',
                element: <Topics/>
            },
            {
                path: '/topic/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element:<QuizDetails></QuizDetails>
            },
            {
                path: '/statistics',
                element: <TotalQuiz></TotalQuiz>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;