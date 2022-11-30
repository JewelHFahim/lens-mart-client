import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Accessories = () => {
  const [accessories, setaccessories] = useState([]);

  useEffect(() => {
    fetch("https://lens-mart-server-jewelhfahim.vercel.app/accessories")
      .then((res) => res.json())
      .then((data) => setaccessories(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center my-5">Accessories Section</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {accessories.map((accessory) => (
          <div className="card bg-base-100 shadow-xl min-h-full">
            <figure className="p-5">
              <img
                style={{ width: "200px" }}
                src={accessory?.products?.img}
                alt=""
              />
            </figure>
            <div className="mx-5 mb-5">
              <h2 className="card-title justify-center text-neutral">
                {accessory.products.title}
              </h2>
              <div className=" text-left mt-4">
                <p className="text-lg font-bold text-primary">
                  Price: ${accessory.products.sale}
                </p>
                <p>Duration: {accessory.products.duration} year</p>
                <p>Location: {accessory.products.location}</p>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/accessories/${accessory._id}`}>
                  <button className="btn btn-outline btn-sm btn-primary">
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
