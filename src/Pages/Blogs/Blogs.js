import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-center text-primary my-5">
        Welcomoe to Blog {blogs.length}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-10">
        {
          blogs.map(blog=> (
            <div className="card m-5 glass">
            <figure><img src={blog.image} alt="car!"/></figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <div className="card-actions justify-end">
                <Link to = {`/blogs/${blog._id}`} >
                <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default Blogs;
