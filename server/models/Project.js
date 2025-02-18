const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tools: { type: String, required: true },
  description: { type: String, required: true },
  githubLink: { type: String, default: null },
  liveLink: { type: String, default: null },
  showroom: { type: Boolean, default: false },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
