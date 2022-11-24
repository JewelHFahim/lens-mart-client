// import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { UserContext } from '../Context/AuthContext';

const Login = () => {
  const { register, handleSubmit } = useForm();
  // const { logIn } = useContext(UserContext);

  const hadnleSignup = (data) => {
    console.log(data);
    // logIn(data.email, data.password)
    // .then(result => {
    //     const user = result.user;
    //     console.log(user);
    // })
    // .catch( error => console.error(error))
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <p className='text-3xl text-center mt-2'>Login</p>
          <form className="card-body" onSubmit={handleSubmit(hadnleSignup)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <label className="label">
            <Link to="/signup" href="!#" className="label-text-alt link link-hover">
                New to LensMart? Signup</Link>
            </label>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
