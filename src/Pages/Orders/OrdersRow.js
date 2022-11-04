import React, { useEffect, useState } from "react";

const OrdersRow = ({ order, handleDelete, handleStatus }) => {
  const { _id, serviceName, price, customer, Service, status } = order;
  const [orderService, setOrderService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${Service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [Service]);

  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost ">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {orderService?.img && (
                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">Brazil</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
      </td>
      <td>Indigo</td>
      <th>
        <button onClick={() => handleStatus(_id)} className="btn btn-ghost btn-xs">
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrdersRow;
