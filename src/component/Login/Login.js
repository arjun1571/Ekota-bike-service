import React, { useContext } from "react";
import login from "../../asset/login.avif"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const navigate= useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
    const {logInUser}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email,password)
        .then(result => {
            const user=result.user;
            console.log(user);
            const currentUser= {
              email:user.email
            }
            fetch("http://localhost:5000/jwt",{
              method:"POST",
              headers:{
                "content-type":"application/json"
              },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              localStorage.setItem("logToken",data.token)
            })

            form.reset()
            // navigate(from, {replace: true})
        })
        .catch(err=> console.log(err))

    }
  return (
    <div className="hero lg:p-10 md:p-10 p-2 ">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          
        <img src={login} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100 lg:p-7 p-3">
          <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-5xl font-bold my-2 text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />

            </div>
          </form>
          <p className="text-center">Have a new user? <Link className="font-bold" to={"/signup"}>Sign Up</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
