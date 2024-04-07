// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "./Provider/AuthProvider";

const Login = () => {
  
    const {singhInUser ,singInWithGoogle}=useContext(AuthContext);
   
    const navigate = useNavigate();
    
    const handelLogin = e =>{
        e.preventDefault();
        const name = e.target.name.value

       const email=  e.target.email.value;
       const password=  e.target.password.value;
       console.log(name,email,password);

       singhInUser(email,password)
       .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
       })
       .catch(error =>{
        console.error(error);
       })
    }
    const handelGoogle = () =>{
      singInWithGoogle()
      .then(result =>{
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
    }

    return (
            

        <div className="hero min-h-screen bg-base-200">
            
            
        <div className="hero-content ">

            
         
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
            <h2 className="text-3xl font-extrabold">Please login</h2>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name"  placeholder="Input name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p className="text-center">New  in here? Please <Link to="/resister">
            <button className="btn btn-link">Resister</button>
            </Link></p>
            <button onClick={handelGoogle} className="btn btn-gosht">Google</button>

          </div>
         </div>
       </div>
    );
};

export default Login;