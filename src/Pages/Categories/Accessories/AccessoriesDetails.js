import { useLoaderData } from "react-router-dom";

const AccessoriesDetails = () => {
  const details = useLoaderData();
  const { title, img, price, des, brand, condition, duration, location, number } = details;

  return (
    <div className="hero  my-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/3 mr-4">
        <img
          src={img}
          className="rounded-lg  border"
          alt=""
        />
        </div>
        <div className=" w-2/3">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="py-2 text-xl text-secondary font-bold">Price: ${price}</p>
          <p className="pb-2"> Condition: {condition} </p>
          <p className="pb-2"> Brand: {brand} </p>
          <p className="pb-2"> Duration: {duration} month</p>
          <p className="pb-2"> Location: {location} </p>
          <p className="pb-2"> Seller: {number} </p>
          <p className="pb-2"> {des} </p>
          <button  className="btn btn-primary my-6">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesDetails;
