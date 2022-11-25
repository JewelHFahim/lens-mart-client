import React, { useEffect, useState } from 'react';
import AddCamera from './AddCamera/AddCamera';

const UserDashboard = () => {
    const [dbUser, setDbUser] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setDbUser(data) )
      },[])
    

    return (
        <div className='border border-green-400 text-center'>
            
            <h1 className=' text-3xl my-10'>hello </h1>

            <label htmlFor="my-modal" className="btn">+ Cameras</label>
            <button className='btn mx-2'>+ Lens</button>
            <button className='btn'>+ Accessories</button>

            {/* <AddCamera></AddCamera> */}

            {
                dbUser.map(dbUser => <AddCamera key={dbUser._id} dbUser={dbUser} ></AddCamera>)
            }
        </div>
    );
};

export default UserDashboard;