import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllProducts = () => {
  // Cameras
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    fetch("https://lens-mart-server-jewelhfahim.vercel.app/cameras")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);

  const handleDeleteCamera = (id) => {
    fetch(`https://lens-mart-server-jewelhfahim.vercel.app/cameras/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
        }
      });
  };

  // Cameras
  const [lens, setLens] = useState([]);
  useEffect(() => {
    fetch("https://lens-mart-server-jewelhfahim.vercel.app/lens")
      .then((res) => res.json())
      .then((data) => setLens(data));
  }, []);

  const handleDeleteLens = (id) => {
    fetch(`https://lens-mart-server-jewelhfahim.vercel.app/lens/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
        }
      });
  };

  // Cameras
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    fetch("https://lens-mart-server-jewelhfahim.vercel.app/accessories")
      .then((res) => res.json())
      .then((data) => setAccessories(data));
  }, []);

  const handleDeleteAccessories = (id) => {
    fetch(`https://lens-mart-server-jewelhfahim.vercel.app/accessories/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-primary my-5 text-center">All Products</h2>

      {/* Camera Section */}
      <h2 className="text-2xl bg-slate-300 p-2 mx-4 mb-2 mt-5 text-center">
        Cameras
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-4 mb-4">
        {cameras.map((camera) => (
          <div className="card bg-base-120 shadow-xl border border-slate-300">
            <figure>
              <img
                style={{ width: "100px" }}
                src={camera.products.img}
                alt="Shoes"
              />
            </figure>
            <div className="px-5 pb-5">
              <h2 className="">{camera.products.title} </h2>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDeleteCamera(camera._id)}
                  className="btn btn-xs btn-error btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lens*/}
      <h2 className="text-2xl bg-slate-300 p-2 mx-4 mb-2 mt-5 text-center">
        Lens
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-4 mb-4">
        {lens.map((len) => (
          <div className="card bg-base-120 shadow-xl border border-slate-300">
            <figure>
              <img
                style={{ width: "100px" }}
                src={len.products.img}
                alt="Shoes"
              />
            </figure>
            <div className="px-5 pb-5">
              <h2 className="">{len.products.title} </h2>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDeleteLens(len._id)}
                  className="btn btn-xs btn-error btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lens*/}
      <h2 className="text-2xl bg-slate-300 p-2 mx-4 mb-2 mt-5 text-center">
        Lens
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mx-4 mb-4">
        {accessories.map((acces) => (
          <div className="card bg-base-120 shadow-xl border border-slate-300">
            <figure>
              <img
                style={{ width: "100px" }}
                src={acces.products.img}
                alt="Shoes"
              />
            </figure>
            <div className="px-5 pb-5">
              <h2 className="">{acces.products.title} </h2>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleDeleteAccessories(acces._id)}
                  className="btn btn-xs btn-error btn-outline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
