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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cameras.map((camera) => (
          <div key = {camera._id} className="card bg-base-100 shadow-xl">
            <figure className="p-5">
              <img src={camera.img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center text-neutral">
                {camera.title}
              </h2>
              <p>
                {/* {
                  camera.des.length  > 5 ? 
                  <div>{camera.des.slice(0, 100)}</div> : <p>{camera.des}</p>
                } */}
              </p>
              {/* <p>{camera.des}</p> */}

              <div className=" text-left mt-4">
                <p className="text-lg font-bold text-primary">
                  Price: ${camera.sale}
                </p>
                <p>Duration: {camera.duration} mon</p>
                <p>Location: {camera.location}</p>
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
