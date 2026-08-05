import React from "react";

function Hero() {
  return (
    <div className="container mt-5">
      <div className="text-center mt-5">
        <h1 className="fs-3 ">Charges</h1>
        <p className="landing-subheading color-gray fs-6 text-muted">
          List of all charges and texes.
        </p>
      </div>
      <div className="row   mt-5 p-5 text-center">
        <div className="col-4">
          <img
            src="media\images-20260413T105856Z-3-001\images\pricingEquity.svg"
            alt=""
            style={{ width: "300px", height: "150px", }}
          />
          <h1 style={{ fontSize: "30px" }}>Free equity delivery</h1>
          <p  style={{ fontSize: "16px" }}>
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          {" "}
          <img
            src="media\images-20260413T105856Z-3-001\images\intradayTrades.svg"
            alt=""
            style={{ width: "300px", height: "150px" }}
          />
          <h1 style={{ fontSize: "30px" }}>Intraday and F&O trades</h1>
          <p  style={{ fontSize: "16px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per <br />
            executed order on intraday trades across
            <br /> equity, currency, and commodity trades. Flat
            <br />
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media\images-20260413T105856Z-3-001\images\pricingEquity.svg"
            alt=""
            style={{ width: "300px", height: "150px" }}
          />
          <h1  style={{ fontSize: "30px" }}>Free direct MF</h1>
          <p  style={{ fontSize: "16px" }}>
            All direct mutual fund investments are
            <br /> absolutely free — ₹ 0 commissions & DP
            <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
