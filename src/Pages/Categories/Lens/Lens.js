import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Lens = () => {
  const [lenses, setLenses] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/lens")
      .then((res) => res.json())
      .then((data) => setLenses(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center my-5">Lens Section</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {lenses.map((lens) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="p-5">
              <img src={lens.img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center text-neutral">
                {lens.title}
              </h2>
              <p>
                {lens.des.length > 100 ? (
                  <div>{lens.des.slice(0, 100) + "..."}</div>
                ) : (
                  <p>{lens.des}</p>
                )}
              </p>
              <div className=" text-left mt-4">
                <p className="text-lg font-bold text-primary">
                  Price: ${lens.price}
                </p>
                <p>Duration: {lens.duration} mon</p>
                <p>Location: {lens.location}</p>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/lens/${lens._id}`}>
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

export default Lens;
