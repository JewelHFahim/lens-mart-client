import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Categories = () => {

  // const { data: categories = [], isLoading } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/categories");
  //     const data = await res.json();
  //     return data;
  //   },
  // });


  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <div key={cat._id} className="card bg-base-100 shadow-2xl">
          <figure>
            <img style={{ height: "250px" }} src={cat.img} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{cat.name}</h2>
            <p>{cat.des}</p>
            <div className="card-actions justify-end">
              <button  className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
