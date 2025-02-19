const express = require("express");
const router = express.Router();
const { gelAllProjects, createProject, deleteProject, updateProject } = require("../controllers/projectControllers");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/list", gelAllProjects);
router.post("/add", authMiddleware, createProject);
router.delete("/delete/:id", authMiddleware, deleteProject);
router.put("/update/:id", authMiddleware, updateProject);

module.exports = router;