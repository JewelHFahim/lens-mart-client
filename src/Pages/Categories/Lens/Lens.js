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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {lenses.map((lens) => (
          <div className="card bg-base-100 shadow-xl">
            <figure className="p-5">
              <img style={{ width: "200px" }} src={lens.products.img} alt="" />
            </figure>
            <div className="mx-5 mb-5">
              <h2 className="card-title justify-center text-neutral">
                {lens.products.title}
              </h2>
              <div className=" text-left mt-4">
              <small className="my-1">{lens.date}</small>

                <p className="text-lg font-bold text-primary">
                  Price: ${lens.products.sale}
                </p>
                <p>Duration: {lens.products.duration} mon</p>
                <p>Location: {lens.products.location}</p>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/lens/${lens._id}`}>
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

export default Lens;
