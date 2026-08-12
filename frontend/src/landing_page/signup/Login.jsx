import React from "react";
import { useState } from "react";

function Login(){
     const [formData, setFormData] = useState({
        email: "",
        password: ""
      });
      const [error, setError] = useState("");
      const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };
    const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("http://localhost:3002/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    console.log("Login successful:", data);
    window.location.href = "http://localhost:3001/";

  } catch (error) {
    console.error("Login failed:", error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};
    return(
        <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-5">
        {/* Form Card wrapper with a nice shadow */}
        <div className="card border-0 shadow-lg rounded-3">
          <div className="card-body p-4 p-sm-5">
            <h3 className="card-title text-center mb-4 fw-bold text-dark">
              Login
            </h3>

            <form onSubmit={handleSubmit}>

              {/* Email Field */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>

              {/* Password Field */}
              <div className="form-floating mb-4">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              
              {/* Terms Checkbox */}
              <div className="form-check mb-4 text-start">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleChange}
                  id="termsCheck"
                  required
                />
                <label
                  className="form-check-label small text-muted"
                  htmlFor="termsCheck"
                >
                  I agree to the Terms & Conditions
                </label>
              </div>

              {/* Submit Button */}
              <button
                className="btn btn-primary btn-lg w-100 fw-semibold mb-3"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login;