const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: ["https://www.kemalgundogdu.dev"], // İzin verilen origin
  methods: ["GET", "POST", "PUT", "DELETE"], // İzin verilen HTTP metodları
  allowedHeaders: ["Content-Type", "Authorization"], // İzin verilen header'lar
}));
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
