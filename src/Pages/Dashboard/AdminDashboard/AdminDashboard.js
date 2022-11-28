import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../../Context/AuthContext';

const AdminDashboard = () => {

    const { dbUser, loading } = useContext(UserContext);

    const handleDeleteDocotor = (id) => {
      fetch(`http://localhost:5000/users/${id}`,{
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success('Deleted Successfully');
          }
        });
    };


    const handleMakeAdmin = (id) => {
      fetch(`http://localhost:5000/users/admin/${id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Make Admin Successful");
          }
        });
    };
  
    if(loading){
      return <progress className="progress w-56"></progress>
  }

    return (
        <div>
            <h1 className='text-center text-3xl my-5' > All Users </h1>

            {
                <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th>Sl</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Authorization</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
      {
        dbUser.map((user, i) => <tr key = { user.i }>

        <th>{i+1}</th>
        <th>{user.name}</th>
        <td>{user.email}</td>
        <th>{user.role}</th>
        <td> 
        {
          user?.role !== "admin" && 
          <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs'>Make Admin</button> 

        }
        </td>
        <td> <button onClick={()=>handleDeleteDocotor(user._id)} className='btn btn-sm btn-error'>Delete</button> </td>
      </tr>)
      }


    </tbody>
  </table>
</div>
            }
        </div>
    );
};

export default AdminDashboard;