import React, {  useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllOrders = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
          .then((res) =>res.json())
          .then((data) => setOrders(data))
          .catch((error) => console.error(error));
    }, []);

    const handleOrder = (id) => {
      fetch(`http://localhost:5000/orders/${id}`,{
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success('Deleted Successfully');
          }
        });
    };

    return (
        <div>
            <h2 className='text-3xl text-center my-5 text-primary'>All Orders</h2>
            <h2 className='text-xl text-center my-2 text-primary'>Total Orders: <span className='ml-2'>{orders.length}</span></h2>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
  
        <th>SL</th>
        <th>Products</th>
        <th>Customer Details</th>
        <th>Remove</th>
        </tr>
    </thead>
    <tbody>
    {
        orders.map((order, i) =>  <tr key = {order.i}>
        <th>{i+1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={order.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold"> {order.title} </div>
              <div className="text-sm"></div>
              <div className="text-sm"></div>
            </div>
          </div>
        </td>
        <td>
        <span className='font-bold'>{order.name}</span>
          <br/>
          <span className="">{order.email}</span>
          <br/>
          <span className="">{order.phone}</span>
          <br/>
          <span className="">{order.location}</span>
        </td>
        <td>
          <label>
            <button onClick={()=>handleOrder(order._id)} className='btn btn-sm'>X</button>
          </label>
        </td>
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