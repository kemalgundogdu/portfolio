const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/users", require("./routes/userRoutes"));
app.use("/projects", require("./routes/projectRoutes"));
app.use("/auth", require("./routes/authRoutes"));

// Default Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
