import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} alt="" className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} alt="" className="w-3/5 right-5 top-1/2 absolute rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
          <p className="text-2xl text-orange-600 font-semibold pb-3">About Us</p>
          <h1 className="text-5xl font-bold text-gray-600">
            We are qualified <br />
            & of experience <br />
            in this field
          </h1>
          <p className="py-6 text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat tempore explicabo laborum reiciendis ex? Quos dolor id modi delectus, officiis voluptas omnis a incidunt enim architecto, voluptatem veritatis provident est.
          </p>
          <p className="py-5">laborum reiciendis ex? Quos dolor id modi delectus, officiis voluptas omnis a incidunt enim architecto, voluptatem veritatis provident est.</p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
