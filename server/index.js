const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
// db connect
const db = require("./config/db");
db();
// routes
const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const PORT = 3001;

app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend 🚀" });
});

app.use("/projects", projectRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
