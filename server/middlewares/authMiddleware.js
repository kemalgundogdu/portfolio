const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Token not found" });

  try {
    const decoded = jwt.verify(token, "secretKey"); // Token'ı doğrula
    req.user = decoded; // Doğrulanan kullanıcı bilgilerini req nesnesine ekle
    next(); // Middleware'i sonlandır
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;