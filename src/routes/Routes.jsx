import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
<Home></Home>
import Biodatas from "../pages/Biodatas/Biodatas";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleBiodataDetails from "../pages/SingleBiodataDetails/SingleBiodataDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import EditBiodata from "../pages/Dashboard/NormalUser/EditBiodata";
import ViewBiodata from "../pages/Dashboard/NormalUser/ViewBiodata";
import MyContactRequest from "../pages/Dashboard/NormalUser/MyContactRequest";
import FavouritesBiodata from "../pages/Dashboard/NormalUser/FavouritesBiodata";
import Home from "../pages/Home/Home/Home";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ApprovedPremium from "../pages/Dashboard/Admin/ApprovedPremium";
import ApprovedContactRequest from "../pages/Dashboard/Admin/ApprovedContactRequest";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import CheckoutForm from "../pages/PaymentPage/CheckoutForm";
import GotMarried from "../pages/Dashboard/NormalUser/GotMarried";
import SuccessStories from "../pages/Dashboard/Admin/SuccessStories";
  
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
              path: '/checkout/:biodataId',
              element: <PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>
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
          element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
          children: [
            // user dashboard routes
            {
              path: 'editBiodata',
              element: <EditBiodata></EditBiodata>
            },
            {
              path: 'viewBiodata',
              element: <ViewBiodata></ViewBiodata>
            },
            {
              path: 'myContactRequest',
              element: <MyContactRequest></MyContactRequest>
            },
            {
              path: 'favouritesBiodata',
              element: <FavouritesBiodata></FavouritesBiodata>
            },
            {
              path: 'gotMarried',
              element: <GotMarried></GotMarried>
            },

            // admin dashboard routes
            {
              path: 'adminDashboard',
              element: <AdminDashboard></AdminDashboard>
            },
            {
              path: 'manageUsers',
              element: <ManageUsers></ManageUsers>
            },
            {
              path: 'approvedPremium',
              element: <ApprovedPremium></ApprovedPremium>
            },
            {
              path: 'approvedContactRequest',
              element: <ApprovedContactRequest></ApprovedContactRequest>
            },
            {
              path: 'success-stories',
              element: <SuccessStories></SuccessStories>
            },
          ]
        }
      ]);
