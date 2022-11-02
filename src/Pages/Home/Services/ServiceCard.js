import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {title, price, _id, img} = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-600">Price : ${price}</p>
          <div className="card-actions">
            <Link to={`/checkout/${_id}`}>
            <button className="btn btn-warning">Buy Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
