import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} >
              Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
