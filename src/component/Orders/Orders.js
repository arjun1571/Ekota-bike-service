import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import OrdersCart from "./OrdersCart";

const Orders = () => {
  const [Porders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(Porders);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleClick = (id) => {
    const proceed = window.confirm("are you sure this service delete now");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfully");

            const remaning = Porders.filter((odr) => odr._id !== id);

            setOrders(remaning);
          }
        });
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {Porders?.map((order) => (
            <OrdersCart
              handleClick={handleClick}
              key={order?._id}
              order={order}
            ></OrdersCart>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
