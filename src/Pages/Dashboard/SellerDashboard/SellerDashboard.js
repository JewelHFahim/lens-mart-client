import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context/AuthContext';
import AddAccessories from '../AddAccessories/AddAccessories';
import AddCamera from '../AddCamera/AddCamera';
import AddLens from '../AddLens/AddLens';
import { FaCamera, FaBullseye, FaTools } from 'react-icons/fa';


const SellerDashboard = () => {

    const {user} = useContext(UserContext);

    const [dbUser, setDbUser] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setDbUser(data) )
      },[])
    

    return (
        <div className='text-center'>
            
            <h1 className=' text-3xl text-primary my-10'> Add Products </h1>

            <label htmlFor="my-camera" className="btn btn-outline btn-primary mx-2"><FaCamera className='mr-2' /> Cameras</label>
            <label htmlFor="my-lens" className='btn mx-2 btn-outline btn-primary'> <FaBullseye className='mr-2' /> Lens</label>
            <label htmlFor="my-accessories" className='btn btn-outline mx-2 btn-primary'> <FaTools className='mr-2'/> Accessories</label>

            {
                dbUser.map(dbUser =>

                <div key={dbUser._id}  >
                {
                dbUser.name === user?.displayName && 
                 <AddCamera dbUser = {dbUser}></AddCamera>
                }
                 </div>)
            }

            {
                dbUser.map(dbUser =>

                <div key={dbUser._id}  >
                {
                dbUser.name === user?.displayName && 
                 <AddLens dbUser = {dbUser}></AddLens>
                }
                 </div>)
            }
            {
                dbUser.map(dbUser =>

                <div key={dbUser._id}  >
                {
                dbUser.name === user?.displayName && 
                 <AddAccessories dbUser = {dbUser}></AddAccessories>
                }
                 </div>)
            }
        </div>
    );
};

export default SellerDashboard;