import React from "react";
import { Routes, Route } from "react-router-dom";

import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import App from "./App";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <WatchList />
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Holdings" element={<Holdings />} />
          <Route path="/Positions" element={<Positions />} />
          <Route path="/Funds" element={<Funds />} />
          <Route path="/App" element={<App />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
