import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context/AuthContext';
import AddAccessories from '../AddAccessories/AddAccessories';
import AddCamera from '../AddCamera/AddCamera';
import AddLens from '../AddLens/AddLens';

const SellerDashboard = () => {

    const {user} = useContext(UserContext);

    const [dbUser, setDbUser] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setDbUser(data) )
      },[])
    

    return (
        <div className='border border-green-400 text-center'>
            
            <h1 className=' text-3xl my-10'>Add Products </h1>

            <label htmlFor="my-camera" className="btn">+ Cameras</label>
            <label htmlFor="my-lens" className='btn mx-2'>+ Lens</label>
            <label htmlFor="my-accessories" className='btn mx-2'>+ Accessories</label>

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