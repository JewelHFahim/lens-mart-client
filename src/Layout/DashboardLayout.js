import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";
import useAdmin from "../Hooks/useAdmin";
import useBuyer from "../Hooks/useBuyer";
import useSeller from "../Hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(UserContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">

          <Outlet></Outlet>

        </div>
        <div className="drawer-side border ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content font-bold">
            {
              isBuyer &&
              <>
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              </>
            }
            {
              isSeller &&
              <>
              <li>
                <Link to="/dashboard/myproducts">My Products</Link>
              </li>
              <li>
                <Link to="/dashboard/addproducts">Add Products</Link>
              </li>
              <li>
                <Link to="/dashboard/sellerorders">Seller Orders</Link>
            </li>
              </>
            }
            { 
              isAdmin &&
             <>
             <li>
                <Link to="/dashboard/admin">All Users</Link>
              </li>
             <li>
                <Link to="/dashboard/admin/allseller">All Seller</Link>
              </li>
             <li>
                <Link to="/dashboard/admin/allorders">All Orders</Link>
              </li>
             <li>
                <Link to="/dashboard/admin/alladmins">All Admins</Link>
              </li>
             <li>
                <Link to="/dashboard/admin/allproducts">All Products</Link>
              </li>
             <li>
                <Link to="/dashboard/admin/reports">Reported Items</Link>
              </li>
             </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
