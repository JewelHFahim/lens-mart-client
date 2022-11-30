import React, { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../../Context/AuthContext";

const AllSeller = () => {
  const { dbUser, loading } = useContext(UserContext);

  const handleSeller = (id) => {
    fetch(`https://lens-mart-server-jewelhfahim.vercel.app/users/${id}`, {
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
    fetch(`https://lens-mart-server-jewelhfahim.vercel.app/users/admin/${id}`, {
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

  const handleVerify = (id) => {
    fetch(
      `https://lens-mart-server-jewelhfahim.vercel.app/users/seller/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verifyed Successful");
        }
      });
  };

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl my-5"> All Seller </h1>

      {
        <div className="overflow-x-auto seller">
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
              {dbUser.map((user, i) => (
                <>
                  {user.role === "Seller" && (
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
                        {user?.status !== "varified" ? (
                          <button
                            onClick={() => handleVerify(user._id)}
                            className="btn btn-xs"
                          >
                            Verify
                          </button>
                        ) : (
                          <button className="btn btn-xs btn-primary text-white">
                            Verified
                          </button>
                        )}
                      </td>

                      <td>
                        {" "}
                        <button
                          onClick={() => handleSeller(user._id)}
                          className="btn btn-sm btn-error"
                        >
                          Delete
                        </button>{" "}
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default AllSeller;
