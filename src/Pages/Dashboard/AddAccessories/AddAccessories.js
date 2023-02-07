import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../../Context/AuthContext";

const AddAccessories = ({ dbUser }) => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { _id } = dbUser;
  const { user } = useContext(UserContext);

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddAccessories = (data, event) => {
    event.preventDefault();
    const form = event.target;
    const image = data.img[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            _id,
            seller: user.displayName,
            title: data.title,
            des: data.des,
            brand: data.brand,
            condition: data.condition,
            duration: data.duration,
            location: data.location,
            buy: data.buy,
            sale: data.sale,
            img: imgData.data.url,
          };
          fetch("http://localhost:5000/accessories", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              form.reset();
              toast.success("added Successfylly");
              navigate("/accessories");
            });
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-accessories" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Add Accessories</h3>
          <form
            className="card-body"
            onSubmit={handleSubmit(handleAddAccessories)}
          >
            {/* 1st row */}
            <div className="flex justify-center">
              <div className="form-control w-2/4">
                <label className="label">
                  {" "}
                  <span className="label-text">Title</span>{" "}
                </label>
                <input
                  {...register("title")}
                  required
                  type="text"
                  placeholder="title"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mx-4 w-1/4">
                <label className="label">
                  {" "}
                  <span className="label-text">Brand Name</span>{" "}
                </label>
                <input
                  {...register("brand")}
                  required
                  type="text"
                  placeholder="brand"
                  className="input input-bordered"
                />
              </div>

              <div className="w-1/4">
                <label className="label">
                  <span className="label-text">Condition</span>
                </label>
                <select
                  {...register("condition")}
                  resource
                  required
                  className="select select-bordered w-full"
                >
                  <option defaultValue={"Good"} disabled selected>
                    Select
                  </option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
            </div>

            {/* 2nd row */}
            <div className="flex justify-center">
              <div className="form-control w-2/4">
                <label className="label">
                  {" "}
                  <span className="label-text"> Location </span>{" "}
                </label>
                <input
                  {...register("location")}
                  required
                  type="text"
                  placeholder="location"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mx-4 w-1/4">
                <label className="label">
                  {" "}
                  <span className="label-text">Buying Price</span>{" "}
                </label>
                <input
                  {...register("buy")}
                  required
                  type="number"
                  placeholder="buy"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/4">
                <label className="label">
                  {" "}
                  <span className="label-text">Sale Price</span>{" "}
                </label>
                <input
                  {...register("sale")}
                  required
                  type="number"
                  placeholder="sale"
                  className="input input-bordered"
                />
              </div>
            </div>

            {/* 3rd row */}
            <div className="flex justify-center">
              <div className="form-control w-2/4">
                <label className="label">
                  {" "}
                  <span className="label-text">Description</span>{" "}
                </label>
                <input
                  {...register("des")}
                  required
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mx-4 w-1/4 ">
                <label className="label">
                  {" "}
                  <span className="label-text">Used Duration</span>{" "}
                </label>
                <input
                  {...register("duration")}
                  required
                  type="number"
                  placeholder="duration"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-1/4">
                <label className="label">
                  {" "}
                  <span className="label-text">Image</span>{" "}
                </label>
                <input
                  {...register("img")}
                  required
                  type="file"
                  placeholder="image"
                  className="mt-2"
                />
              </div>
            </div>

            <label
              htmlFor="my-accessories"
              className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div className="form-control modal-action mt-6">
              <button htmlFor="my-accessories" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAccessories;
