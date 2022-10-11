import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import QuizDetails from "../components/QuizDetails";
import Root from "../components/Root";
import Topics from "../components/Topics";

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
            }
        ]
    }
])

export default router;