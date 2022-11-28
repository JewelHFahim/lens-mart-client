import React, {  useEffect, useState } from 'react';

const AllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
          .then((res) =>res.json())
          .then((data) => setOrders(data))
          .catch((error) => console.error(error));
    }, []);


    return (
        <div>
            <h2 className='text-3xl text-center'>My Orders</h2>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Products</th>
        <th>Customer</th>
        <th>Meet Location</th>
        <th>c. Phone</th>
        </tr>
    </thead>
    <tbody>
    {
        orders.map(order =>  <tr key = {order._id}>
        <th>
          <label>
            <button className='btn btn-sm'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={order.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{order.title}</div>
              <div className="text-sm"></div>
              <div className="text-sm"></div>
            </div>
          </div>
        </td>
        <td>
        {order.name}
          <br/>
          <span className="badge badge-ghost badge-sm"> {order.email}</span>
        </td>
        <td>{order.location}</td>
        <th>
          <button className="btn btn-ghost btn-xs"> Phone: {order.phone}</button>
        </th>



      </tr>
      )
    }
    </tbody>

    
  </table>
</div>
            
        </div>
    );
};

export default AllOrders;