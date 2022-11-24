import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CameraDetails from "../Pages/Categories/Cameras/CameraDetails";
import Cameras from "../Pages/Categories/Cameras/Cameras";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            }
        ]
    }

])

export default router;