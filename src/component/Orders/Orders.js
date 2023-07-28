import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Orders = () => {

    const [order,setOrder]=useState({})
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))

    },[user?.email])
    return (
        <div>
            {
                order.length
            }
        </div>
    );
};

export default Orders;