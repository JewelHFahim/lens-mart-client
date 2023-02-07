import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/AuthContext";

const OrderModal = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(UserContext);

  const details = useLoaderData().products;
  const { seller, title, sale, img } = details;

  const handleOrder = (data, event) => {
    event.preventDefault();
    const form = event.target;
    console.log(data);
    savetoDB(data.name, data.email, data.phone, data.location, form);
  };

  const savetoDB = (name, email, phone, location, form) => {
    const order = { name, email, phone, location, title, sale, img, seller };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Booking Succes!");
        form.reset();
        <Navigate to="/cameras"></Navigate>;
      });
  };

  return (
    <div>
      <input type="checkbox" id="addProduct" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-8/12 max-w-5xl">
          <h3 className=" text-lg text-center">
            Booking: <span className="font-bold">{title}</span>{" "}
          </h3>
          <h3 className=" text-lg text-center">$ {sale}</h3>
          <form className="card-body" onSubmit={handleSubmit(handleOrder)}>
            <div className="flex items-center">
              <div className="form-control w-full">
                <input
                  {...register("name")}
                  defaultValue={user?.displayName}
                  readOnly
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full ml-4">
                <input
                  {...register("email")}
                  defaultValue={user?.email}
                  readOnly
                  type="email"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="form-control w-full">
                <label className="label">
                  {" "}
                  <span className="label-text">Phone Number</span>{" "}
                </label>
                <input
                  {...register("phone")}
                  required
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full ml-4">
                <label className="label">
                  {" "}
                  <span className="label-text">Meeting Location</span>{" "}
                </label>
                <input
                  {...register("location")}
                  required
                  type="text"
                  placeholder="Meeting location"
                  className="input input-bordered"
                />
              </div>
            </div>

            <label
              htmlFor="addProduct"
              className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="form-control modal-action mt-6">
              <button htmlFor="addProduct" className="btn btn-primary">
                Submit
              </button>
              {/* <label htmlFor="addProduct" className="btn btn-primary">Submit</label> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
