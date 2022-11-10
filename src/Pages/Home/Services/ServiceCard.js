import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

  const { title, price, _id, img } = service;


  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-60" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-600">Price : ${price}</p>
          <div className="">
            <Link to={`/checkout/${_id}`}>
              <button className="bg-red-600 hover:bg-red-500 hover: px-6 py-2 text-white rounded">Buy Now</button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
