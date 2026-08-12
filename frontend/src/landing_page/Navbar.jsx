import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg sticky-top bg-light border-bottom bg-body-tertiary">
      <div class="container-fluid p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media\images-20260413T105856Z-3-001\images\logo.svg"
            alt=""
            style={{ width: "150px", marginLeft: "200px" }}
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ marginLeft: "330px" }}
          >
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>
            
            <li class="nav-item ">
              <Link class="nav-link active" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/product">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="support">
                Support
              </Link>
            </li>
            <li class="navbar_menu ">
              <Link
                class="nav-link "
                to="menu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-bars"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
