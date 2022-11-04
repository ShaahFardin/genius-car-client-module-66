import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Checkout = () => {
  const { title, _id, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    const phone = form.phone.value;

    const order = {
      Service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    // To send data from the client to the server we have to use the POST method
    // First we have to send data to the backend
    // The receieve data sent data in the backend
    // Then sent the receieved data to the database

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("order places successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleCheckout}>
        <h1 className="text-3xl text-orange-500">You are about to order: {title}</h1>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 my-10">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            className="input input-bordered w-full "
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered w-full "
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-secondary w-full"
          placeholder="Type your message here"
        ></textarea>
        <input type="submit" value="Place your order" className="btn btn-secondary my-5" />
      </form>
    </div>
  );
};

export default Checkout;
