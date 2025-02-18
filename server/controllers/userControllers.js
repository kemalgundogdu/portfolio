const bcrypt = require('bcrypt');
const User = require('../models/User');

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        let updatedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: updatedPassword });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: "Kullanıcı oluşturulamadı" });
    }
}

module.exports = { createUser };