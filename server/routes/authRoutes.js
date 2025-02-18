const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/authControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", loginUser);

router.get("/dashboard", authMiddleware, (req, res) => {
  // frontend konsol mesajı
  res.json({ message: "Dashboard" });
});

module.exports = router;
