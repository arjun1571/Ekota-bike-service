import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const CheakOut = () => {
  const { _id, price, title } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleClick = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = `${from.firstName.value} ${from.lastName.value}`;
    const mobile = from.mobile.value;
    const message = from.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      name,
      mobile,
      message,
      email:user.email,
    };
    console.log(order);
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            alert("data submit")
            from.reset()
        }
    })
    .catch(err => console.log(err))
  };

  return (
    <form onSubmit={handleClick} className="lg:my-10">
      <h1 className="px-3 mt-5 lg:text-2xl text-center font-bold">{title}</h1>
      <div className="grid gap-10 lg:grid-cols-2 grid-cols-1 place-items-center lg:p-10 p-3">
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full"
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full "
        />
        <input
          name="mobile"
          type="text"
          placeholder="Phone"
          className="input input-bordered w-full "
        />
        <input
          name="email"
          type="text"
          disabled
          value={user?.email}
          className="input input-bordered w-full "
        />
        <textarea
          name="message"
          className="textarea textarea-bordered w-full h-48"
          placeholder="Type your"
        ></textarea>
      </div>
      <input
        type="submit"
        className="btn lg:mx-10 px-10"
        value="Place Your Order"
      />
    </form>
  );
};

export default CheakOut;
