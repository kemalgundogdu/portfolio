import React, { useEffect, useState } from "react";
import axios from "axios";
// react-router-dom
import { useNavigate } from "react-router-dom";
// react modal
import Modal from "react-modal";
// components
import Navbar from "../../components/Navbar";
import LogoutButton from "./LogoutButton";
import Project from "./Project";
// projects api
import { getProjectsAll } from "../../api/api";
// Modal için erişilebilirlik ayarı
Modal.setAppElement("#root");

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    document.title = "Dashboard | Kemal Gündoğdu";
  });

  // projects
  useEffect(() => {
    getProjectsAll().then((res) => setProjects(res));
  }, [projects]);

  // Kullanıcı giriş yapmış mı kontrol et
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        await axios.get("http://localhost:3001/auth/dashboard", {
          headers: {
            Authorization: token,
          },
        });
      } catch (error) {
        console.error("Hata:", error.response?.data?.message);

        // Yetkisiz erişim (401) veya geçersiz token hatasında login'e yönlendir
        if (error.response?.status === 401) {
          localStorage.removeItem("token"); // Eski token'ı temizle
          localStorage.removeItem("user"); // Eski user'ı temizle
          navigate("/admin/login");
        }
      }
    };

    fetchData();
  }, [navigate]);

  // tabs
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="min-h-screen max-w-2xl mx-auto font-inter">
      <Navbar />
      <div className="px-6 py-12 mt-16 text-black dark:text-white/70">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="mt-3">
          {/* tabs */}
          <div className="flex -mx-1">
            <button
              className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setActiveTab("projects")}
            >
              Projeler
            </button>
            <button
              className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setActiveTab("users")}
            >
              Kullanıcılar
            </button>
            <button
              className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setActiveTab("settings")}
            >
              Ayarlar
            </button>
          </div>
          {/* tab panels */}
          <div className="mt-6">
            <div
              id="projects"
              className={`text-gray-600 dark:text-gray-400 p-4 bg-gray-100 dark:bg-gray-800 rounded-md ${
                activeTab === "projects" ? "block" : "hidden"
              }`}
            >
              <h2 className="text-lg font-semibold">Projeler</h2>
              Burada projelerinizi yönetebilirsiniz.
              {projects.map((project) => (
                <Project
                  key={project._id}
                  project={project}
                  openModal={openModal}
                />
              ))}
            </div>
            <div
              id="users"
              className={`text-gray-600 dark:text-gray-400 p-4 bg-gray-100 dark:bg-gray-800 rounded-md ${
                activeTab === "users" ? "block" : "hidden"
              }`}
            >
              <h2 className="text-lg font-semibold">Kullanıcılar</h2>
              Burada kullanıcılarınızı yönetebilirsiniz.
            </div>
            <div
              id="settings"
              className={`text-gray-600 dark:text-gray-400 p-4 bg-gray-100 dark:bg-gray-800 rounded-md ${
                activeTab === "settings" ? "block" : "hidden"
              }`}
            >
              <h2 className="text-lg font-semibold">Ayarlar</h2>
              Burada ayarlarınızı yönetebilirsiniz.
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Proje Düzenleme"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
          },
        }}
        className="bg-white dark:bg-gray-800 max-w-xl w-96 mx-auto p-4 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-300"
      >
        <h2 className="font-semibold w-full border-b-[1px] border-gray-200 dark:border-gray-600 pb-3 mb-3">
          Proje Düzenle
        </h2>
        {selectedProject && (
          <div>
            <p>Proje Adı: {selectedProject.name}</p>
            <button onClick={closeModal}>Kapat</button>
          </div>
        )}
      </Modal>
      <LogoutButton />
    </div>
  );
}

export default Dashboard;
