import React from "react";

function Universe({ imageURL, productDescription }) {
  return (
    <div className="container text-center mt-5">
      <h1>The Zerodha Universe</h1>
      <p className="text-muted text-small">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-5 ">
        <div className="col-4 p-3 mt-5">
          <div className=" p-4">
            {" "}
            <img
              src=" media\images-20260413T105856Z-3-001\images\zerodhaFundhouse.png"
              alt="img"
              style={{ width: "250px", height: "60px" }}
            />
            <p className="text-muted text-small">
              Our asset management venture <br />
              that is creating simple and transparent index <br /> funds to help
              you save for your goals.
            </p>
          </div>
          <div className=" p-5">
            {" "}
            <img
              src=" media\images-20260413T105856Z-3-001\images\streakLogo.png"
              alt="img"
              style={{ width: "200px", height: "100px" }}
            />
            <p className="text-muted text-small">
              systematic investment plan
              <br /> that allow you to create you to backtest <br />
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col-4 p-3 mt-5">
          <div className=" ">
            {" "}
            <img
              src=" media\images-20260413T105856Z-3-001\images\sensibullLogo.svg"
              alt="img"
              style={{ width: "150px", height: "100px" }}
            />
            <p className="text-muted text-small">
              Option trading platform that let's you <br />
              create strategies analyze positions and examine
              <br />
              Data points like open interests, FII/DII, and more.
            </p>
          </div>
          <div className="p-5 ">
            {" "}
            <img
              src=" media\images-20260413T105856Z-3-001\images\smallcaseLogo.png"
              alt="img"
              style={{ width: "150px", height: "100px" }}
            />
            <p className="text-muted text-small">
              Thematic investing platform <br />
              thaht helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col-4 p-3 mt-5">
          <div className=" ">
            {" "}
            <img
              src=" media\images-20260413T105856Z-3-001\images\tijori.svg"
              alt="img"
              style={{ width: "150px", height: "100px" }}
            />
            <p className="text-muted text-small">
              Investment research platform <br /> that offers detailed insights
              on stocks <br /> sectors , supply , chains, and more.
            </p>
          </div>
          <div className="p-5 ">
            {" "}
            <img
              src=" media\images-20260413T105856Z-3-001\images\dittoLogo.png"
              alt="img"
              style={{ width: "150px", height: "100px" }}
            />
            <p className="text-muted text-small">
              Personalized advice on life and health insurance. No Spam ,<br />
              and no mis-selling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
