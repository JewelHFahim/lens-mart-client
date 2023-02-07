import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../../Context/AuthContext";

const SellerOrders = () => {
  const { user } = useContext(UserContext);

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteOrders = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
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
      <h1 className="text-3xl text-center my-5">Seller Orders</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Products Details</th>
              <th>Customer Details</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr className="hover">
                {order.seller === user?.displayName && (
                  <>
                    <th></th>
                    <td>
                      <img
                        className="w-24 rounded-full"
                        src={order.img}
                        alt=""
                      />{" "}
                      <br />
                      <span>
                        {order.title} <br />
                      </span>
                      <span>${order.sale}</span>{" "}
                    </td>
                    <td>
                      {order.name} <br />
                      <span>{order.phone}</span> <br />
                      <span>{order.email}</span> <br />
                      <span>{order.location}</span> <br />
                    </td>
                    <td>
                      {" "}
                      <button
                        onClick={() => handleDeleteOrders(order._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerOrders;
