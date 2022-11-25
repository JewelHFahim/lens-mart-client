import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


      {categories.map((cat) => (
        <Link to = {`/${cat.cat}`} key={cat._id} className="card bg-base-100 shadow-2xl hover:border border-slate-400 hover:text-primary">
          <figure>
            <img style={{ height: "250px" }} src={cat.img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{cat.name}</h2>
            <p className="">{cat.des}</p>
          </div>
        </Link>
      ))}


    </div>
  );
};

export default Categories;
