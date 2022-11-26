import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { Link, Navigate} from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {

  const { register, handleSubmit } = useForm();
  const { createUser, googleLogin, updatedProfile } = useContext(UserContext);
  const googleProvider = new GoogleAuthProvider();


  const hadnleSignup = (data, event) => {
    const form = event.target;

    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Signup Success");

        const updatedUser = {
          displayName: data.name,
        };
        updatedProfile(updatedUser)
          .then(() => {
            userSaveToDB( data.name, data.email, data.role);
          })
          .catch((error) => console.log(error));
        form.reset();
        <Navigate to = "/" ></Navigate>
      })
      .catch((error) => console.error(error));
  };

  const handlegoogleLogin = () => {
    googleLogin(googleProvider)
      .ten((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Signup Success");
      })
      .catch((error) => console.log(error));
  };

  const userSaveToDB = ( name, email, role) => {
    const user = { name, email, role };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className=" lg:w-5/12 mx-auto my-10">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <p className="text-3xl text-center mt-2">Sign Up</p>

          <form className="card-body" onSubmit={handleSubmit(hadnleSignup)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name")}
                required
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                required
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

          <div>
          <label className="label"><span className="label-text">Join As</span></label>

            <select {...register("role")} required className="select select-bordered w-full">
              <option defaultValue={"Buyer"} >Buyer</option>
              <option>Seller</option>
            </select>
          </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                required
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account? Login
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <button
            onClick={handlegoogleLogin}
            className="btn btn-outline border border-primary hover:bg-primary mx-8 mb-4 text-primary font-bold"
          >
            Google
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Signup;
