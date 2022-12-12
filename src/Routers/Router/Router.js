import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Mains/Main";
import About from "../../Pages/Abouts/About";
import Home from "../../Pages/Homes/Home";
import Project from "../../Pages/Projects/Project";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Project></Project>
            }
        ]
    }
]);