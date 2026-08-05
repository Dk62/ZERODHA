import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mt-5">
      <section>
        <div className="text-center mt-5">
          <h1>Technology</h1>
          <h3 className="text-muted mt-3 fs-4">
            sleek, modern and intuitive trading platforms
          </h3>
          <p className="mt-3 p-3">
            check out our{" "}
            <a href=" " style={{ textDecoration: "none" }}>
              investment offerings{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
