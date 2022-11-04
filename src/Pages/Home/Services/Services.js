import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="mt-10">
      <div className="text-center">
        <p className="text-2xl pt-10 font-semibold text-orange-600">Services : {services.length}</p>
        <h2 className="text-5xl font-bold py-5">Our Services</h2>
        <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore doloremque magnam dolore odit! <br /> Fugit quam commodi iusto cum quasi repellat iure nostrum voluptatem, dolorem veniam similique aspernatur ducimus amet.</p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
      </div>
    </div>
  );
};

export default Services;
