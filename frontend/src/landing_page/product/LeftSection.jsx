import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} alt="img" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media\images-20260413T105856Z-3-001\images\googlePlayBadge.svg"
                alt="googleplay"
              />
            </a>
            <a href={appStore}>
              <img
                src="media\images-20260413T105856Z-3-001\images\appstoreBadge.svg"
                alt="appstore"
                style={{marginLeft:"50px"}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LeftSection;