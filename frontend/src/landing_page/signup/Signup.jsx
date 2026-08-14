import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:3002/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      // Signup successfully completed
      setSuccess(true);

    } catch (err) {
      setError(err.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-8 col-lg-5">

        <div className="card border-0 shadow-lg rounded-3">
          <div className="card-body p-4 p-sm-5">

            {success ? (

              <div className="text-center py-5">

                <div className="mb-3">
                  <i className="fa-solid fa-circle-check text-success fs-1"></i>
                </div>

                <h3 className="text-success fw-bold">
                  Account Created Successfully!
                </h3>

                <p className="text-muted">
                  You successfully created your account.
                </p>

              </div>

            ) : (

              <>
                <h3 className="card-title text-center mb-4 fw-bold text-dark">
                  Create Account
                </h3>

                <form onSubmit={handleSubmit}>

                  {/* Error */}
                  {error && (
                    <div className="alert alert-danger">
                      {error}
                    </div>
                  )}

                  {/* Name */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />

                    <label>Full Name</label>
                  </div>

                  {/* Email */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                    />

                    <label>Email address</label>
                  </div>

                  {/* Mobile */}
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      name="mobileNo"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="9876543210"
                      required
                    />

                    <label>Mobile No.</label>
                  </div>

                  {/* Password */}
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Password"
                      required
                    />

                    <label>Password</label>
                  </div>

                  {/* Confirm Password */}
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      required
                    />

                    <label>Confirm Password</label>
                  </div>

                  {/* Terms */}
                  <div className="form-check mb-4 text-start">
                    <input
                      className="form-check-input"
                      type="checkbox"
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

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading
                      ? "Creating Account..."
                      : "Sign Up"}
                  </button>

                </form>

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
              </>

            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
