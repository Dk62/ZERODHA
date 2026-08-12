const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    console.log("Received cookie:", token);

    if (!token) {
      return res.status(401).json({
        error: "Authentication required"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {
    console.error(error);

    return res.status(401).json({
      error: "Invalid or expired token"
    });
  }
};

module.exports = authMiddleware;