import React from "react";

const ServiceCard = ({service}) => {
    const {title, price, description, img} = service;
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
            <button className="btn btn-warning">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
