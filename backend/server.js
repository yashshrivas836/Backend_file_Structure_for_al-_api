const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const leadRoutes = require("./routes/leadRoutes");
require("dotenv").config();


const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

// Use routes
app.use("/api", userRoutes);
app.use("/api", leadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
