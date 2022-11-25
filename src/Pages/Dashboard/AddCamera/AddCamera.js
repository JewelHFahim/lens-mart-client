import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddCamera = ({dbUser}) => {
  const { register, handleSubmit } = useForm();
  const { _id } = dbUser;


  const handleAddCamera = (data, event) => {
    const form = event.target;
    console.log(data);
    userSaveToDB(_id, data.title, data.des, data.brand, data.condition, data.duration, data.location, data.buy, data.sale)
  };

  const userSaveToDB = (_id, title, des, brand, condition, duration, location, buy, sale) => {
    const product = { user_id: _id, title, des, brand, condition, duration, location, buy, sale };

    fetch("http://localhost:5000/cameras", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };



  return (
    <div>
    
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Add Camera</h3>
          <form className="card-body" onSubmit={handleSubmit(handleAddCamera)}>
            {/* 1st row */}
            <div className="flex justify-center">

            <div className="form-control w-full">
              <label className="label"> <span className="label-text">Title</span> </label>
              <input {...register("title")} type="text" placeholder="title" className="input input-bordered" />
            </div>
            <div className="form-control mx-4 ">
              <label className="label"> <span className="label-text">Brand Name</span> </label>
              <input {...register("brand")} type="text" placeholder="brand" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label"> <span className="label-text">Condition</span> </label>
              <input {...register("condition")} type="text" placeholder="condition" className="input input-bordered" />
            </div>
            </div>

            {/* 2nd row */}
            <div className="flex justify-center">
            <div className="form-control w-full">
              <label className="label"> <span className="label-text"> Location </span> </label>
              <input {...register("location")} type="text" placeholder="location" className="input input-bordered" />
            </div>
            <div className="form-control mx-4 ">
              <label className="label"> <span className="label-text">Buying Price</span> </label>
              <input {...register("buy")} type="number" placeholder="buy" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label"> <span className="label-text">Sale Price</span> </label>
              <input {...register("sale")} type="number" placeholder="sale" className="input input-bordered" />
            </div>
            </div>

            {/* 3rd row */}
            <div className="flex justify-center">
            <div className="form-control w-full">
              <label className="label"> <span className="label-text">Description</span> </label>
              <input {...register("des")} type="text" placeholder="description" className="input input-bordered" />
            </div>
            <div className="form-control mx-4 ">
              <label className="label"> <span className="label-text">Used Duration</span> </label>
              <input {...register("duration")} type="number" placeholder="duration" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label"> <span className="label-text">Image</span> </label>
              <input {...register("img")} type="file" placeholder="image" className="input input-bordered" />
            </div>
            </div>


            <div className="form-control modal-action mt-6">
              <button htmlFor="my-modal" className="btn btn-primary">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCamera;
