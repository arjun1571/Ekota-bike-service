import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';

const OurService = () => {
    const [services,setServices]=useState([])
    useEffect( ()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='my-10'>
            <h1 className='text-center lg:text-4xl md:text-4xl  text-2xl lg:mt-20 mt-10 font-bold'>Our Service Area</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-5 p-2 my-10'>
                {
                    services?.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default OurService;