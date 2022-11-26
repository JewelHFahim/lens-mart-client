import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../Context/AuthContext";


const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();
  
  const { logIn, googleLogin } = useContext(UserContext);
  const googleProvider = new GoogleAuthProvider();

  const hadnleLogin = (data, event) => {
    const form = event.target;
    console.log(data);

    logIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        toast.success('Login Success');
        navigate(from, {replace: true});
        form.reset();
        
        
    })
    .catch( error => console.error(error))
  };

  const handlegoogleLogin = () =>{
   

    googleLogin(googleProvider)
    .ten(result => {
      const user = result.user;
      console.log(user);
      toast.success('Login Success');
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="lg:w-5/12 mx-auto my-10">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <p className='text-3xl text-center mt-2'>Login</p>
          <form className="card-body" onSubmit={handleSubmit(hadnleLogin)}>
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
                type="password"
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
          <button onClick={handlegoogleLogin} className="btn btn-outline border border-primary hover:bg-primary mx-8 mb-3 text-primary font-bold">Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
