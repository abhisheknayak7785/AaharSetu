const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("database connection established succeesssfully");
});

var listener = app.listen(port, function () {
  console.log("Listening on port " + port);
});

const beneficiaryRoutes = require("./routes/beneficiaryRoutes");
const shopRoutes = require("./routes/shopRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/auth", authRoutes); // Ensure auth routes are distinct
app.use(authRoutes); // Keeping original base mounting if frontend expects it for login/register
app.use("/api/beneficiary", beneficiaryRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/admin", adminRoutes);
console.log(process.env.MONGO_URI);
