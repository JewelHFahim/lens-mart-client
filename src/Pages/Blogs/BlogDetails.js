import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const BlogDetails = () => {

    const blogs = useLoaderData();
    const {title, image, des} = blogs; 

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure><img src={image} style={{ width: "450px",height: "300px" }} alt="" className="lg:w-1/2" /></figure> 
      <div className="card-body lg:w-1/2">
        <h2 className="card-title">{title} {blogs.length} </h2>
        <p>{des}</p>
        <div className="card-actions justify-end">
        <Link to = "/blogs">
                <button className="btn btn-primary">Back Blogs</button>
                </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
