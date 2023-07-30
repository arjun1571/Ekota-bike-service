import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCart = ({service}) => {
    const {_id,img,title,price} =service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-red-400 font-bold'>Price:$ {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/cheakout/${_id}`}>
            <button className="btn btn-primary">Cheak Out</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCart;