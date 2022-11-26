import React, { useEffect, useState } from 'react';
import AddAccessories from '../AddAccessories/AddAccessories';
import AddCamera from '../AddCamera/AddCamera';
import AddLens from '../AddLens/AddLens';

const SellerDashboard = () => {
    const [dbUser, setDbUser] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setDbUser(data) )
      },[])
    

    return (
        <div className='border border-green-400 text-center'>
            
            <h1 className=' text-3xl my-10'>hello </h1>

            <label htmlFor="my-camera" className="btn">+ Cameras</label>
            <label htmlFor="my-lens" className='btn mx-2'>+ Lens</label>
            <label htmlFor="my-accessories" className='btn mx-2'>+ Accessories</label>

            {
                dbUser.map(dbUser => <AddCamera key={dbUser._id} dbUser={dbUser} ></AddCamera>)
            }
            {
                dbUser.map(dbUser => <AddLens key={dbUser._id} dbUser={dbUser} ></AddLens>)
            }
            {
                dbUser.map(dbUser => <AddAccessories key={dbUser._id} dbUser={dbUser} ></AddAccessories>)
            }
        </div>
    );
};

export default SellerDashboard;