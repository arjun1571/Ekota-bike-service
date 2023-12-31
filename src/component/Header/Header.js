import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
  const {user,LogOut}=useContext(AuthContext)

  const handleOut =()=>{
        LogOut()
        // .then(()=>{
        //   console.log("out success");
        // })
        // .catch((err)=>console.log(err))
  }
  const menuItems = (
    <>
      <li className="text-xl">
        <Link to={"/home"}>Home</Link>
      </li>
      {
        user?.email ? 
         <>
          <li className="text-xl">
          <Link to={"/orders"}>Orders</Link>
          </li>
          <li className="text-xl">
          <button onClick={handleOut}>Log Out</button>
          </li>
         </>
         :
        <li className="text-xl">
          <Link to={"/login"}>Login</Link>
        </li>
      }
      
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-xl md:text-4xl lg:text-4xl"
        >
          Ekota Bike Service
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {
          user?.email &&
           <p>{user.email}</p>
        }
        <Link href="" className="btn">
          Button
        </Link>
      </div>
    </div>
  );
};

export default Header;
