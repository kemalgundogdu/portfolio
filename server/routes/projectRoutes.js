const express = require("express");
const router = express.Router();
const { gelAllProjects, createProject, deleteProject, updateProject } = require("../controllers/projectControllers");

router.get("/list", gelAllProjects);
router.post("/add", createProject);
router.delete("/delete/:id", deleteProject);
router.put("/update/:id", updateProject);

module.exports = router;