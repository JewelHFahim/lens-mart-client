import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/AuthContext";

const MyProducts = () => {
  const { user } = useContext(UserContext);

  // Cameras
  const [myCameras, setMyCameras] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cameras")
      .then((res) => res.json())
      .then((data) => setMyCameras(data));
  }, []);

  // Lens
  const [myLens, setMyLens] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/lens")
      .then((res) => res.json())
      .then((data) => setMyLens(data));
  }, []);

  // Accessories
  const [myAccessories, setMyAccessories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/accessories")
      .then((res) => res.json())
      .then((data) => setMyAccessories(data));
  }, []);



  return (
    <div className="mb-8">
      <h2 className="text-3xl text-center text-primary my-5">Added Products</h2>


      {/* Cameras Section */}
      <h2 className="text-center text-primary text-lg bg-slate-200 font-semibold py-2">Added Cameras</h2>
       {
        myCameras.map((pro) => (
        <div key={pro._id}>
            {
              pro.products.seller === user?.displayName && 
              <div className="border border-slate-400 my-2 flex items-center justify-center">
                <img style={{ width: "100px" }} src={pro.products.img} alt="" />
                <p className="text-lg ml-5 font-medium">{pro.products.title}</p>
                <p className="text-lg ml-5">Sale Price: <span  className="font-medium"> ${pro.products.sale}</span></p>
                <p className="text-lg ml-5">Posted Date: <span className="font-medium">{pro.date}</span> </p>
              </div> 
            }
        </div>
      ))}



      {/* Lens Section */}
      <h2 className="text-center text-primary text-lg bg-slate-300 font-semibold py-2 mb-2">Added Lens</h2>
       {
        myLens.map((pro) => (
        <div key={pro._id}>
            {
              pro.products.seller === user?.displayName && 
              <div className="border border-slate-400 my-2 flex items-center justify-center">
                <img style={{ width: "100px" }} src={pro.products.img} alt="" />
                <p className="text-lg ml-5 font-medium">{pro.products.title}</p>
                <p className="text-lg ml-5">Sale Price: <span  className="font-medium"> ${pro.products.sale}</span></p>
                <p className="text-lg ml-5">Posted Date: <span className="font-medium">{pro.date}</span> </p>
              </div> 
            }
        </div>
      ))}


      {/* Accessories Section */}
      <h2 className="text-center text-primary text-lg bg-slate-200 font-semibold py-2 mb-2">Added Accessories</h2>
       {
        myAccessories.map((pro) => (
        <div key={pro._id}>
            {
              pro.products.seller === user?.displayName && 
              <div className="border border-slate-400 my-2 flex items-center justify-center">
                <img style={{ width: "100px" }} src={pro.products.img} alt="" />
                <p className="text-lg ml-5 font-medium">{pro.products.title}</p>
                <p className="text-lg ml-5">Sale Price: <span  className="font-medium"> ${pro.products.sale}</span></p>
                <p className="text-lg ml-5">Posted Date: <span className="font-medium">{pro.date}</span> </p>
              </div> 
            }
        </div>
      ))}

    </div>
  );
};

export default MyProducts;
