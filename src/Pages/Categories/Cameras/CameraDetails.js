import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../../Context/AuthContext";
import useBuyer from "../../../Hooks/useBuyer";
import OrderModal from "../../Orders/OrderModal";

const CameraDetails = () => {
  const{user} = useContext(UserContext);
  const [isBuyer] = useBuyer(user?.email);


  const details = useLoaderData().products;
  const { title, img, buy, des, brand, condition, duration, location, sale, seller } = details;

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
          <p className="py-2 text-xl text-secondary font-bold">Sale Price: ${sale}</p>
          <p className="pb-2 font-semibold"> Original Price: ${buy} </p>
          <p className="pb-2 font-semibold"> Condition: {condition} </p>
          <p className="pb-2 font-semibold"> Brand: {brand} </p>
          <p className="pb-2 font-semibold"> Duration: {duration} month</p>
          <p className="pb-2 font-semibold"> Location: {location} </p>
          <p className="pb-2 font-semibold"> Seller: {seller} </p>
          <p className="pb-2"> {des} </p>

          {
            isBuyer ?
            <label htmlFor="addProduct" className="btn btn-primary my-6">Book Now</label>
            :
            <div className="tooltip tooltip-right disabled"  data-tip="Admin & Seller Cant Order" >
            <label className="btn btn-primary my-6 " >Book Now</label>
            </div>
          }          
        </div>
      </div>
      <OrderModal></OrderModal>
    </div>
  );
};

export default CameraDetails;
