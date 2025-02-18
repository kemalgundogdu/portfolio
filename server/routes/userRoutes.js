const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userControllers");

router.post("/add", createUser);

module.exports = router;