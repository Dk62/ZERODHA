import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid " 
      style={{ backgroundColor: "rgb(250, 250, 250)", height: "250px" }}
    >
      <div className="ps-6 py-6 m-auto" id="support">
        <div className=" mx-5 ">
          <h2 className="pr-2 mt-5 text-xl ">
            <a
              href="/"
              className="cursor-pointer p-4 text-muted "
              style={{ color: "black", fontSize: "35px" }}
            >
              Support Portal
            </a>
          </h2>
        </div>
        
        <div
          className="mt-5"
          styel={{
            display: "flex",
            justifyContent: "flex-end",
            height: "100vh",
          }}
        >
          <a href="#myticket">
            <button
              className="text-medium "
              style={{
                backgroundColor: "#387ED1",
                color: "white",
                borderRadius: "5px",
                fontSize: "20px",
                marginLeft: "auto",
              }}
            >
              My tickets
            </button>
          </a>
        </div>
      </div>
      <div className="mt-4" id="inputBar">
        
          <input
            id="text"
            type="text"
            class=" px-4 py-3 text-lg border rounded"
            placeholder="Eg: How do i open my account, How do i activate F&O....."
            
          />
        
      </div>
    </div>
  );
}

export default Hero;
