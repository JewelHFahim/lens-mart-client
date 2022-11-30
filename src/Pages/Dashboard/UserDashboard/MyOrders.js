import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../../Context/AuthContext";
import useAdmin from "../../../Hooks/useAdmin";
import useBuyer from "../../../Hooks/useBuyer";
import useSeller from "../../../Hooks/useSeller";

const MyOrders = () => {
  const { user } = useContext(UserContext);

  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://lens-mart-server-jewelhfahim.vercel.app/orders?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);

  const handleDeleteOrders = (id) => {
    fetch(`https://lens-mart-server-jewelhfahim.vercel.app/orders/${id}`, {
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

  return (
    <div>
      {isBuyer && (
        <div className="overflow-x-auto w-full">
          <h2 className="text-3xl text-primary text-center mt-5">My Orders</h2>
          <h2 className="text-xl  text-center mb-3">
            Total Orders: {orders.length}
          </h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Products</th>
                <th>Customer</th>
                <th>Meet Location</th>
                <th>c. Phone</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <th>
                    <label>
                      <button
                        onClick={() => handleDeleteOrders(order._id)}
                        className="btn btn-sm"
                      >
                        X
                      </button>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-24 mask mask-squircle">
                          <img
                            src={order.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order.title}</div>
                        <div className="text-sm">${order.sale}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {order.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {order.email}
                    </span>
                  </td>
                  <td>{order.location}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      Phone: {order.phone}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isSeller && (
        <div>
          <h2 className="text-3xl bg-slate-200 py-5 text-primary text-center my-10">
            WelCome to Seller Dashboard
          </h2>
        </div>
      )}

      {isAdmin && (
        <div>
          <h2 className="text-3xl bg-slate-200 py-5 text-primary text-center my-10">
            WelCome to Admin Dashboard
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
