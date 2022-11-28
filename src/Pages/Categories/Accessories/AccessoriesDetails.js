import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { UserContext } from "../../../Context/AuthContext";
import useBuyer from "../../../Hooks/useBuyer";
import OrderModal from "../../Orders/OrderModal";

const AccessoriesDetails = () => {

  const{user} = useContext(UserContext);
  const [isBuyer] = useBuyer(user?.email);

  const details = useLoaderData().products;
  const { title, img, sale, des, brand, condition, duration, location, buy, seller, status } = details;

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
          <p className="pb-2"> Original Price: ${buy} </p>
          <p className="pb-2"> Condition: {condition} </p>
          <p className="pb-2"> Brand: {brand} </p>
          <p className="pb-2"> Duration: {duration} month</p>
          <p className="pb-2"> Location: {location} </p>
          <div className="pb-2 font-semibold flex items-center"> <span>Seller: {seller}</span> 
          {
            status === 'varified' ?
              <div className="badge badge-primary badge-xs ml-2"></div>
              :
              <div className="badge badge-xs ml-2"></div>
          }
          </div>

          <p className="pb-2"> {des} </p>
          {
            user?.email ? 
            <>
            {

            isBuyer ?
            <label htmlFor="addProduct" className="btn btn-primary my-6">Book Now</label>
            :
            <div className="tooltip tooltip-right disabled"  data-tip="Admin & Seller Cant Order" >
              <label className="btn btn-primary my-6 " >Book Now</label>
            </div>
            }
            </>
            :
            <Link to= "/login" ><label className="btn btn-primary my-6">Book Now</label></Link>
          }
        </div>
      </div>
      <OrderModal></OrderModal>
    </div>
  );
};

export default AccessoriesDetails;
