import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cameras = () => {
  
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cameras")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center my-5">Cameras Section</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {cameras.map((camera) => (
          <div key = {camera._id} className="card bg-base-100 shadow-xl">

            <figure className="">
              <img src={camera.products.img} alt="" />
            </figure>
            <div className="px-5 pb-5">
              <h2 className="card-title justify-center text-neutral">
                {camera.products.title}
              </h2>
              
              <div className=" text-left mt-4">
              <small className="my-1">{camera.date}</small>

                <p className="text-lg font-bold text-primary">
                  Price: ${camera.products.sale}
                </p>
                <p>Duration: {camera.products.duration} mon</p>
                <p>Location: {camera.products.location}</p>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/cameras/${camera._id}`}>
                  <button className="btn btn-outline btn-primary">
                    Details
                  </button>
                </Link>
              </div>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Cameras;
