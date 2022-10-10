import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
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
            }
        ]
    }
])

export default router;