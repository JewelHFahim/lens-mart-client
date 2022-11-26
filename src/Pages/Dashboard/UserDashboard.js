import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';

const UserDashboard = () => {

    const [orders, setorders] = useState([]);
    const {user} = useContext(UserContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setorders(data))
    },[user?.email])


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
                <img src={order.order.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{order.order.title}</div>
              <div className="text-sm">Price: ${order.order.sale}</div>
            </div>
          </div>
        </td>
        <td>
          {order.order.buyer_name}
          <br/>
          <span className="badge badge-ghost badge-sm">{order.order.buyer_email}</span>
        </td>
        <td>{order.order.location}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{order.order.phone}</button>
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

export default UserDashboard;