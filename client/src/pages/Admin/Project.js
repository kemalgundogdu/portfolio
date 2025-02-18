import React from "react";

function Project({ project, openModal }) {
  return (
    <div className="mt-5">
      <h4 className="font-medium text-gray-700 dark:text-gray-300">
        {project.name}
      </h4>
      <h5 className="text-xs text-gray-600 dark:text-gray-400">
        {project.tools}
      </h5>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        {project.description}
      </p>
      <div className="flex justify-between gap-2 mt-3">
        <div className="flex gap-2">
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
        <div>
          <button
            onClick={() => openModal(project)}
            className="text-sm px-3 py-1 rounded bg-gray-800 text-gray-200 hover:bg-gray-200 hover:text-gray-800 transition-colors"
          >
            Düzenle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
