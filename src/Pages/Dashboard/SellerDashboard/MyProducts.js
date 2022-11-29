import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const handleDeleteCamera = (id) => {
    fetch(`http://localhost:5000/cameras/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
        }
      });
  };

  // Lens
  const [myLens, setMyLens] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/lens")
      .then((res) => res.json())
      .then((data) => setMyLens(data));
  }, []);
  const handleDeleteLens = (id) => {
    fetch(`http://localhost:5000/lens/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
        }
      });
  };


  // Accessories
  const [myAccessories, setMyAccessories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/accessories")
      .then((res) => res.json())
      .then((data) => setMyAccessories(data));
  }, []);
  const handleDeleteAccessories = (id) => {
    fetch(`http://localhost:5000/accessories/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
        }
      });
  };



  return (
    <div className="mb-8">
      <h2 className="text-3xl text-center text-primary my-5">My Products</h2>

      {/* Cameras Section */}

      <h2 className="text-center text-primary text-lg bg-slate-400 font-semibold py-2">Added Cameras</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Products Details</th>
              <th>Customer Details</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
           {myCameras.map((pro, i) =>  <tr className="hover">
           {
              pro.products.seller === user?.displayName && 
                <>
                <th></th>
                <td><img className="w-24 rounded-full" src={pro.products.img} alt="" /> <br />
                <span className="font-bold" >{pro.products.title} <br /></span> 
                <span>${pro.products.sale}</span> <br />
                <span>Date: {pro.date}</span>
                </td>
                <td> <button className="btn btn-secondary btn-sm">Advertise</button> <br />
               </td>
                <td> <button onClick={()=> handleDeleteCamera(pro._id) } className="btn btn-sm btn-error">Delete</button> </td>
                </>
           }
            </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Lens Section */}
      <h2 className="text-center text-primary text-lg bg-slate-400 font-semibold py-2">Added Lens</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Products Details</th>
              <th>Customer Details</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
           {myLens.map((pro, i) =>  <tr className="hover">
           {
              pro.products.seller === user?.displayName && 
                <>
                <th></th>
                <td><img className="w-24 rounded-full" src={pro.products.img} alt="" /> <br />
                <span className="font-bold" >{pro.products.title} <br /></span> 
                <span>${pro.products.sale}</span> <br />
                <span>Date: {pro.date}</span></td>
                <td> <button className="btn btn-secondary btn-sm">Advertise</button></td>
                <td> <button onClick={()=> handleDeleteLens(pro._id) } className="btn btn-sm btn-error">Delete</button> </td>
                </>
           }
            </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Accessories Section */}
      <h2 className="text-center text-primary text-lg bg-slate-400 font-semibold py-2">Added Accessories</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Products Details</th>
              <th>Customer Details</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
           {myAccessories.map((pro, i) =>  <tr className="hover">
           {
              pro.products.seller === user?.displayName && 
                <>
                <th></th>
                <td><img className="w-24 rounded-full" src={pro.products.img} alt="" /> <br />
                <span className="font-bold" >{pro.products.title} <br /></span> 
                <span>${pro.products.sale}</span> <br />
                <span>Date: {pro.date}</span>
                </td>
                <td> <button className="btn btn-secondary btn-sm">Advertise</button> <br />
               </td>
                <td> <button onClick={()=> handleDeleteAccessories(pro._id) } className="btn btn-sm btn-error">Delete</button> </td>
                </>
           }
            </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyProducts;
