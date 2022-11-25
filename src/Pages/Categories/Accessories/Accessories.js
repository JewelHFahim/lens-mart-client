import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Accessories = () => {
  const [accessories, setaccessories] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/accessories")
      .then((res) => res.json())
      .then((data) => setaccessories(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center my-5">Accessories Section</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {accessories.map((accessory) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="p-5">
              <img src={accessory.img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center text-neutral">
                {accessory.title}
              </h2>
              <p>
                {accessory.des.length > 100 ? (
                  <div>{accessory.des.slice(0, 100) + "..."}</div>
                ) : (
                  <p>{accessory.des}</p>
                )}
              </p>
              <div className=" text-left mt-4">
                <p className="text-lg font-bold text-primary">
                  Price: ${accessory.sale}
                </p>
                <p>Duration: {accessory.duration} mon</p>
                <p>Location: {accessory.location}</p>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/accessories/${accessory._id}`}>
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

export default Accessories;
