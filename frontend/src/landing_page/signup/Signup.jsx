import React from "react";
import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
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
      const response = await fetch("http://localhost:3002/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Signup failed");
      alert("Account created successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-5">
        {/* Form Card wrapper with a nice shadow */}
        <div className="card border-0 shadow-lg rounded-3">
          <div className="card-body p-4 p-sm-5">
            <h3 className="card-title text-center mb-4 fw-bold text-dark">
              Create Account
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="floatingName">Full Name</label>
              </div>

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

              <div className="form-floating mb-3">
                <input
                  type="tel"
                  name="mobileNo"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="9876543210"
                  required
                />
                <label htmlFor="floatingEmail">Mobile No.</label>
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

              <div className="form-floating mb-4">
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                />
                <label htmlFor="floatingPassword"> confirm Password</label>
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
                onSubmit={handleSubmit}
                type="submit"
                disabled={loading}
              >
                Sign Up
              </button>

              <div className="text-center mt-3">
                <span className="text-muted small">
                  Already have an account?{" "}
                </span>
                <a
                  href="/login"
                  className="small text-decoration-none fw-semibold"
                >
                  Log in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
