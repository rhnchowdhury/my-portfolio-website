import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Mains/Main";
import About from "../../Pages/Abouts/About";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Homes/Home";
import CodeHs from "../../Pages/Projects/CodeHs/CodeHs";
import DailyLife from "../../Pages/Projects/DailyLife/DailyLife";
import MobileGarage from "../../Pages/Projects/MobileGarage/MobileGarage";
import Project from "../../Pages/Projects/Project";
import Sage from "../../Pages/Projects/Sage/Sage";

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
            },
            {
                path: '/garage',
                element: <MobileGarage></MobileGarage>
            },
            {
                path: '/sage',
                element: <Sage></Sage>
            },
            {
                path: '/life',
                element: <DailyLife></DailyLife>
            },
            {
                path: '/code',
                element: <CodeHs></CodeHs>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);