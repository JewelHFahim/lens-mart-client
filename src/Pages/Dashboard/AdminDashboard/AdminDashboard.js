import React, { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../../Context/AuthContext";
import "./AdminDashboard.css";

const AdminDashboard = () => {

  const { dbUser, loading } = useContext(UserContext);
  const handleBuyer = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
        }
      });
  };

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successful");
        }
      });
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl my-5"> All Buyer </h1>

      {
        <div className="overflow-x-auto buyer">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Authorization</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {dbUser.map((user) => (
                <React.Fragment key={user._id}>
                  {user.role === "Buyer" && (
                    <tr>
                      <th>{user.name}</th>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        {user?.role !== "admin" && (
                          <button
                            onClick={() => handleMakeAdmin(user._id)}
                            className="btn btn-xs"
                          >
                            Make Admin
                          </button>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => handleBuyer(user._id)}
                          className="btn btn-sm btn-error"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default AdminDashboard;
