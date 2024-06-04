import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Biodatas from "../pages/Biodatas/Biodatas";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleBiodataDetails from "../pages/SingleBiodataDetails/SingleBiodataDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import EditBiodata from "../components/Dashboard/EditeBiodata/EditBiodata";
import ViewBiodata from "../components/Dashboard/ViewBiodata/ViewBiodata";
  
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
              path: '/biodata/:id',
              element: <PrivateRoute><SingleBiodataDetails></SingleBiodataDetails></PrivateRoute>
            },
            {
              path: '/aboutUs',
              element: <AboutUs></AboutUs>
            },
            {
              path: '/contactUs',
              element: <ContactUs></ContactUs>
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/signup',
              element: <SignUp></SignUp>
            }
          ],
        },
        {
          path: 'dashboard',
          element: <DashboardLayout></DashboardLayout>,
          children: [
            {
              path: 'editBiodata',
              element: <EditBiodata></EditBiodata>
            },
            {
              path: 'viewBiodata',
              element: <ViewBiodata></ViewBiodata>
            },
          ]
        }
      ]);
