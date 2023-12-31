import React, { useContext } from 'react';
import login from "../../asset/login.avif"
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthProvider/AuthProvider"

const SingnUp = () => {

    const {createUser}=useContext(AuthContext)
    const handleSingUp=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset()
        })
        .catch(err=>console.log(err))

    }
    return (
        <div className="hero lg:p-10 md:p-10 p-2 ">
           
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          
        <img src={login} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100 lg:p-7 p-3">
          <form onSubmit={handleSingUp} className="card-body">
          <h1 className="text-5xl font-bold my-2 text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name='email'
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name='password'
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />

            </div>
          </form>
          <p className='text-center'> already have a account? <Link className='font-bold' to={"/login"}>log in</Link> </p>
        </div>
      </div>
    </div>
    );
};

export default SingnUp;