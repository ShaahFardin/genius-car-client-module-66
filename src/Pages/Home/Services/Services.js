import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);


  useEffect(() => {
    fetch(`http://localhost:5000/services?ascending=${isAsc? 'des': 'asc'}`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [isAsc])


  return (
    <div className="mt-10">
      <div className="text-center">
        <p className="text-2xl pt-10 font-semibold text-orange-600">Services : {services.length}</p>
        <h2 className="text-5xl font-bold py-5">Our Services</h2>
        <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos inventore doloremque magnam dolore odit! <br /> Fugit quam commodi iusto cum quasi repellat iure nostrum voluptatem, dolorem veniam similique aspernatur ducimus amet.</p>

        <button onClick={()=> setIsAsc(!isAsc)}  className="bg-red-600 px-10 py-2 font-normal tracking-wider rounded text-white mb-5">{isAsc? "Descending": "Ascending"}</button>
        <div className="dropdown dropdown-right ml-10">
            <label tabIndex={0} className="bg-red-600 px-10 py-2 font-normal tracking-wider rounded text-white mb-5">Click</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-red-100 rounded-box w-52">
              <li><p>Less then 100</p></li>
              <li><p>More then 100</p></li>
            </ul>
          </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
      </div>
    </div>
  );
};

export default Services;
