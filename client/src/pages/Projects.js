import React, { useEffect } from "react";

import Navbar from "../components/Navbar";

function Projects() {
  useEffect(() => {
    document.title = "Projeler | Kemal Gündoğdu";
  });

  return (
    <div className="min-h-screen max-w-2xl mx-auto font-inter">
      <Navbar />
      <div className="px-6 py-12 mt-16">
        <div className="mt-3 p-4 bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">
            Kişisel Web Sitem
          </h4>
          <h5 className="text-xs text-gray-600 dark:text-gray-400">
            React, Redux, JavaScript, Tailwind CSS
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            React ve Tailwind CSS kullanarak geliştirdiğim kişisel web sitem.
            Projelerimi ve fotoğraflarımı paylaşıyorum.
          </p>
          <div className="flex gap-2 mt-3">
            <a
              href="https://github.com/kemalgundogdu/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-800 hover:text-gray-200 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-3 p-4 bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-700 rounded-xl">
          <h4 className="font-medium text-gray-700 dark:text-gray-300">
            Bil5 Quiz
          </h4>
          <h5 className="text-xs text-gray-600 dark:text-gray-400">
            React, Redux, JavaScript, Tailwind CSS, Framer
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Sade ve modern tasarıma sahip yapısıyla Bil5, genel kültür seviyesi
            ölçmeyi amaçlar. Her test 5 sorudan oluşur ve testin sonucunu
            paylaşmaya olanak sağlar.
          </p>
          <div className="flex gap-2 mt-3">
            <a
              href="https://github.com/kemalgundogdu/quizApp-bil5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-800 hover:text-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://bil5quiz.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-800 hover:text-gray-200 transition-colors"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
