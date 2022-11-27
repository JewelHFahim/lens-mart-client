import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Accessories from "../Pages/Categories/Accessories/Accessories";
import AccessoriesDetails from "../Pages/Categories/Accessories/AccessoriesDetails";
import CameraDetails from "../Pages/Categories/Cameras/CameraDetails";
import Cameras from "../Pages/Categories/Cameras/Cameras";
import Lens from "../Pages/Categories/Lens/Lens";
import LensDetails from "../Pages/Categories/Lens/LensDetails";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AllOrders from "../Pages/Dashboard/AdminDashboard/AllOrders";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import SellerDashboard from "../Pages/Dashboard/SellerDashboard/SellerDashboard";
import SellerOrders from "../Pages/Dashboard/SellerDashboard/SellerOrders";
import MyOrders from "../Pages/Dashboard/UserDashboard/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import OrderModal from "../Pages/Orders/OrderModal";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/cameras",
        element: <Cameras></Cameras>,
      },
      {
        path: "/cameras/:id",
        element: <CameraDetails></CameraDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cameras/${params.id}`),
      },
      {
        path: "/lens",
        element: <Lens></Lens>,
      },
      {
        path: "/lens/:id",
        element: <LensDetails></LensDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/lens/${params.id}`),
      },
      {
        path: "/accessories",
        element: <Accessories></Accessories>,
      },
      {
        path: "/accessories/:id",
        element: <AccessoriesDetails></AccessoriesDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/accessories/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <MyOrders></MyOrders>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/addproducts",
        element: (
          <PrivateRouter>
            <SellerDashboard></SellerDashboard>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: <PrivateRouter><MyProducts></MyProducts></PrivateRouter>,
      },
      {
        path: "/dashboard/sellerorders",
        element: <PrivateRouter><SellerOrders></SellerOrders></PrivateRouter>
      },
      {
        path: "dashboard/cameras/:id",
        element: (
          <PrivateRouter>
            <OrderModal></OrderModal>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/dashboard/cameras/${params.id}`),
      },

      {
        path: "/dashboard/admin",
        element: (
          <PrivateRouter>
            <AdminDashboard></AdminDashboard>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/admin/allorders",
        element: <PrivateRouter><AllOrders></AllOrders></PrivateRouter>,
      },
    ],
  },
]);

export default router;
