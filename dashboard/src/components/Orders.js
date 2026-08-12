// import React, { useState, useEffect } from "react";
// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  // const [allOrder, setAllOrder] = useState(0);

  // useEffect(() => {
  //   axios.get("http://localhost:3002/newOrder").then((res) => {
  //     // console.log(res.data);
  //     setAllOrder(res.data);
  //   });
  // }, []);
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;