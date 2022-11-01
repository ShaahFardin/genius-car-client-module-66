import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="hero w-full py-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-20 w-1/2 lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-orange-500 p-2 text-center">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <p>
                    New to Genius Car? <Link className="text-orange-500" to="/registration">Sign Up</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-error" type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
