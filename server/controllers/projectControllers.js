const Project = require("../models/Project");

const gelAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
 
const createProject = async (req, res) => {
  try {
    const { name, tools, description, githubLink, liveLink } = req.body;
    const newProject = new Project({
      name,
      tools,
      description,
      githubLink,
      liveLink,
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: "Proje oluşturulamadı" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: "Proje silindi" });
  } catch (error) {
    res.status(400).json({ message: "Proje silinemedi" });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, tools, description, githubLink, liveLink } = req.body;
    const updatedProject = { name, tools, description, githubLink, liveLink };
    await Project.findByIdAndUpdate(id, updatedProject, { new: true });
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: "Proje güncellenemedi" });
  }
}

module.exports = { gelAllProjects, createProject, deleteProject, updateProject };
