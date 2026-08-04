import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="container mx-2">
      <div classNmae="mt-5 text-center">
        <div className="col-4">
          <div className="indices-container">
            <div className="nifty d-flex list-unstyled gap-2 m-0">
              <p className="index">NIFTY 50</p>
              <p className="index-points">{100.2}</p>
              <p className="percent">100% </p>
            </div>
            <div className="sensex  d-flex list-unstyled gap-2 m-0">
              <p className="index">SENSEX</p>
              <p className="index-points">{100.2}</p>
              <p className="percent">90% </p>
            </div>
          </div>
          <div className="col-8">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
