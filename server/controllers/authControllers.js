const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // control username
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ message: "Kullanıcı adı veya şifre hatalı" });

    // password compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ message: "Kullanıcı adı veya şifre hatalı" });

    const token = jwt.sign({ userId: user._id }, "secretKey", {
      expiresIn: "1d",
    });

    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (error) {
    res.status(500).json({ message: "Sunucu hatası" });
  }
};

module.exports = { loginUser };
