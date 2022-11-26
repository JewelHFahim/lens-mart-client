import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../Context/AuthContext';

const AllUser = () => {

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
            <h1 className='text-center text-3xl' > All Users </h1>

            {
                <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Job</th>
        <th>Role</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    
      {
        dbUser.map(user => <tr>
        <th>{user.name}</th>
        <td>{user.email}</td>
        <td>Quality Control Specialist</td>
        <td> 
        {
          user?.role !== "admin" && 
          <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-sm'>Make Admin</button> 

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

export default AllUser;