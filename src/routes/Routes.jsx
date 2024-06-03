import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
  
  export const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path: '/biodatas',
              element: <Biodatas></Biodatas>
            },
            {
              path: '/aboutUs',
              element: <AboutUs></AboutUs>
            },
            {
              path: '/contactUs',
              element: <ContactUs></ContactUs>
            },
          ]
        },
      ]);
