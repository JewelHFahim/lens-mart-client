import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { UserContext } from '../Context/AuthContext';

const Signup = () => {

    const { register, handleSubmit } = useForm();
    // const { createUser } = useContext(UserContext);
    

    const hadnleSignup = (data) =>{

        console.log(data);
        // createUser( data.email, data.password )
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        // })
        // .catch( error => console.error(error))
    }

    return (

      <div className="hero my-10">
  <div className="hero-content flex-col">
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
    <p className='text-3xl text-center mt-2'>Sign Up</p>
      <form className="card-body" onSubmit={handleSubmit(hadnleSignup)} >

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  {...register("name")} type="text" placeholder="name" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  {...register("email")} type="email" placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input  {...register("email")} type="file" placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  {...register("password")} type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
          <Link to='/login'  className="label-text-alt link link-hover">Already have an account? Login</Link> 
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Signup;