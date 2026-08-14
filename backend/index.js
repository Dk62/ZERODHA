require("dotenv").config();

const jwt = require("jsonwebtoken");
const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const { UserModel } = require("./model/UserModel");

const authMiddleware = require("./middleware/authMiddleware");

const PORT = process.env.PORT;
const url = process.env.MONGO_URL;

const app = express();
const router = express.Router();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(router);

const API_KEY = process.env.API_KEYS;
const BASE_URL = process.env.BASE_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

router.get("/api/profile", authMiddleware, async (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user,
  });
});

router.post("/api/signup", async (req, res) => {
  try {
    const { username, email, mobileNo, password, confirmPassword } = req.body;

    // 1. Check required fields
    if (!username || !email || !mobileNo || !password || !confirmPassword) {
      return res.status(400).json({
        error: "All fields are required.",
      });
    }
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        error: "User with this email already exists.",
      });
    }

    // 2. Check password confirmation
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Password and confirm password should be the same.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // 3. Check if email already exists

    // 4. Create user
    const newUser = new UserModel({
      username,
      email,
      mobileNo,
      password: hashedPassword,
    });

    // 5. Save user to MongoDB
    await newUser.save();

    return res.status(201).json({
      success:true,
      message: "Account created successfully.",
    });
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
});

router.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required.",
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password.",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        error: "Invalid email or password.",
      });
    }

    // IMPORTANT: Create token BEFORE using it
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    // Now token exists
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    console.log("Login successful:", data);

    window.location.href = "http://localhost:3001";
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
});

router.get("/api/stock/quote/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const response = await axios.get(BASE_URL, {
      params: {
        function: "GLOBAL_QUOTE",
        symbol: symbol,
        apikey: API_KEY,
      },
    });

    // Alpha Vantage nesting format is "Global Quote"
    const quoteData = response.data["Global Quote"];

    if (!quoteData) {
      return res
        .status(404)
        .json({ error: "Symbol not found or API limit reached" });
    }
    res.json({
      symbol: quoteData["01. symbol"],
      open: quoteData["02. open"],
      high: quoteData["03. high"],
      low: quoteData["04. low"],
      price: quoteData["05. price"],
      volume: quoteData["06. volume"],
      latestTradingDay: quoteData["07. latest trading day"],
      previousClose: quoteData["08. previous close"],
      change: quoteData["09. change"],
      changePercent: quoteData["10. change percent"],
    });
  } catch (error) {
    res.status(500).json({ error: "Backend error fetching quote" });
  }
});

router.get("/api/stock/intraday/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TIME_SERIES_INTRADAY",
        symbol: symbol,
        interval: "1min",
        apikey: API_KEY,
      },
    });
    const timeSeries = response.data["Time Series (1min)"];
    if (!timeSeries) {
      return res.status(404).json({ error: "No intraday data available" });
    }

    // Format data into a clean array for frontend charts (e.g., Recharts)
    const chartData = Object.keys(timeSeries)
      .slice(0, 30)
      .map((time) => ({
        time: time,
        price: parseFloat(timeSeries[time]["1. open"]),
      }))
      .reverse(); // Oldest to newest

    res.json(chartData);
  } catch (error) {
    res.status(500).json({ error: "Backend error fetching chart data" });
  }
});

app.get("/holdings", async (req, res) => {
  let holdings = await HoldingModel.find({});
  res.json(holdings);
});

app.get("/positions", async (req, res) => {
  let positions = await PositionModel.find({});
  res.json(positions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("order saved!");
});

app.listen(PORT, () => {
  console.log("app started..");
});
