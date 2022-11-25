import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Accessories from "../Pages/Categories/Accessories/Accessories";
import AccessoriesDetails from "../Pages/Categories/Accessories/AccessoriesDetails";
import CameraDetails from "../Pages/Categories/Cameras/CameraDetails";
import Cameras from "../Pages/Categories/Cameras/Cameras";
import Lens from "../Pages/Categories/Lens/Lens";
import LensDetails from "../Pages/Categories/Lens/LensDetails";
import AllUser from "../Pages/Dashboard/AllUser";
import UserDashboard from "../Pages/Dashboard/UserDashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/cameras',
                element: <Cameras></Cameras>
            },
            {
                path: '/cameras/:id',
                element: <CameraDetails></CameraDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/cameras/${params.id}`)
            },
            {
                path: '/lens',
                element: <Lens></Lens>,
            },
            {
                path: '/lens/:id',
                element: <LensDetails></LensDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/lens/${params.id}`)
            },
            {
                path: '/accessories',
                element: <Accessories></Accessories>,
            },
            {
                path: '/accessories/:id',
                element: <AccessoriesDetails></AccessoriesDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/accessories/${params.id}`)
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/dashboard",
            element: <UserDashboard></UserDashboard>
          },
          {
            path: "/dashboard/allusers",
            element: <AllUser></AllUser>
          },

        //   {
        //     path: "/dashboard/allusers",
        //     element:<AdminRoute><AllUsers></AllUsers></AdminRoute>,
        //   },
          
        ],
      },

])

export default router;