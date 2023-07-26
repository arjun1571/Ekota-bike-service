import React from 'react';

const ServiceCart = ({service}) => {
    const {img,title,price} =service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-red-400 font-bold'>Price:$ {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCart;