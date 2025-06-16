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
import Khukumoni from "../../Pages/Projects/khukumoni/Khukumoni";
import RainCloud from "../../Pages/Projects/RCC/RainCloud";
import Idea from "../../Pages/Projects/IdeaGrp/Idea";
import Pets from "../../Pages/Projects/Pets/Pets";
import Gym from "../../Pages/Projects/Gym/Gym";
import Travel from "../../Pages/Projects/Travel/Travel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Project></Project>,
      },
      {
        path: "/khuku",
        element: <Khukumoni></Khukumoni>,
      },
      {
        path: "/rcc",
        element: <RainCloud></RainCloud>,
      },
      {
        path: "/idea",
        element: <Idea></Idea>,
      },
      {
        path: "/pets",
        element: <Pets></Pets>,
      },
      {
        path: "/gym",
        element: <Gym></Gym>,
      },
      {
        path: "/travel",
        element: <Travel></Travel>,
      },
      {
        path: "/garage",
        element: <MobileGarage></MobileGarage>,
      },
      {
        path: "/sage",
        element: <Sage></Sage>,
      },
      {
        path: "/life",
        element: <DailyLife></DailyLife>,
      },
      {
        path: "/code",
        element: <CodeHs></CodeHs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
