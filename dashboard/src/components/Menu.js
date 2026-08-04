import React from "react";

const Menu = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-4">
          <img src="logo.png" alt="logokite" style={{ width: "25%" }} />
        </div>
        <div className="col-4">
          <div className="menus">
            <ul>
              <li>
                <p>Dashboards</p>
              </li>
              <li>
                <p>Order</p>
              </li>
              <li>
                <p>Holdings</p>
              </li>
              <li>
                <p>Positions</p>
              </li>
              <li>
                <p>Funds</p>
              </li>
              <li>
                <p>App</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
