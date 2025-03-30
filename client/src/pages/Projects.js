import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = "Projeler | Kemal Gündoğdu";

    axios.get(`${process.env.REACT_APP_API_URL}projects/list`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("API isteği sırasında hata:", error.message);
      });
  }, []);

  

  return (
    <div className="min-h-screen max-w-2xl mx-auto font-inter">
      <Navbar />
      <div className="px-6 py-12 mt-16">
        {projects.map((project) => (
          <div className="mt-3 p-4 bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl">
            <h4 className="font-medium text-gray-700 dark:text-gray-300">
              {project.name}
            </h4>
            <h5 className="text-xs text-gray-600 dark:text-gray-400">
              {project.tools}
            </h5>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {project.description}
            </p>
            <div className="flex gap-2 mt-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-800 hover:text-gray-200 transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-800 hover:text-gray-200 transition-colors"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
