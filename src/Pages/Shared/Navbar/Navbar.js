import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import logo from "../../../Assets/logo.png";
import { UserContext } from "../../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(UserContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/cameras" >Cameras</Link>
      </li>
      <li>
        <Link to="/lens" >Lens</Link>
      </li>
      <li>
        <Link to="/accessories" >Accessories</Link>
      </li>
      <li>
        <Link to="/dashboard" >Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            {menuItems}
          </ul>
        </div>
        <Link to ="/" className="btn btn-ghost normal-case text-2xl text-[#033e38] font-bold">
          <img style={{ width: "50px" }} src={logo} alt="" /> LensMart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">{menuItems}</ul>
      </div>
      <div className="navbar-end">
      <p className="mr-2">{user?.displayName}</p>
      {
        user?.email ?
        <Link onClick={handleLogout} className="btn btn-outline btn-sm">
          <FaSignOutAlt />
        </Link>
        :
        <Link to="/login" className="btn btn-outline btn-sm">
          Login
        </Link>
      }
      <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
      </div>
    </div>
  );
};

export default Navbar;
