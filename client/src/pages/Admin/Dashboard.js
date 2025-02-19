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
// icons
import { IoCloseOutline } from "react-icons/io5";
// formik
import { Formik, Field, Form } from "formik";
// toast
import { ToastContainer, toast } from "react-toastify";
// Modal için erişilebilirlik ayarı
Modal.setAppElement("#root");

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addProjectModal, setAddProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  const openAddProjectModal = () => {
    setAddProjectModal(true);
  };

  const closeAddProjectModal = () => {
    setAddProjectModal(false);
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
              <div className="w-full flex justify-between items-center">
                <div>Burada projelerinizi yönetebilirsiniz.</div>
                <div>
                  <button
                    onClick={openAddProjectModal}
                    className="text-sm hover:bg-gray-300 p-2 rounded dark:hover:bg-gray-700 transition-all outline-none"
                  >
                    Yeni Proje Ekle
                  </button>
                </div>
              </div>
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
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* edit modal */}
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
        className="bg-white dark:bg-gray-800 max-w-[calc(100%-20px)] w-[600px] mx-auto p-4 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-300"
      >
        <div className="flex items-center justify-between w-full border-b-[1px] border-gray-200 dark:border-gray-600 pb-3 mb-3">
          <h2 className="font-semibold text-gray-700 dark:text-gray-200">
            Proje Düzenle
          </h2>
          <button onClick={closeModal} className="text-2xl">
            <IoCloseOutline />
          </button>
        </div>
        {selectedProject && (
          <div>
            {/* project edit form */}
            <Formik
              initialValues={{
                name: selectedProject.name,
                tools: selectedProject.tools,
                description: selectedProject.description,
                githubLink: selectedProject.githubLink,
                liveLink: selectedProject.liveLink,
              }}
              onSubmit={async (values, { setSubmitting }) => {
                setError(null);
                try {
                  const token = localStorage.getItem("token");
                  await axios.put(
                    `http://localhost:3001/projects/update/${selectedProject._id}`,
                    values,
                    {
                      headers: {
                        Authorization: token,
                      },
                    }
                  );
                  toast("Proje güncellendi", {
                    type: "success",
                  });
                  closeModal();
                } catch (err) {
                  setError(
                    err.response?.data?.message || "Güncelleme başarısız"
                  );
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
                    >
                      Name
                    </label>
                    <Field
                      id="name"
                      name="name"
                      autoComplete="off"
                      placeholder="Name"
                      className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="tools"
                      className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
                    >
                      Tools
                    </label>
                    <Field
                      id="tools"
                      name="tools"
                      autoComplete="off"
                      placeholder="Tools"
                      className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
                    >
                      Description
                    </label>
                    <Field
                      as="textarea"
                      id="description"
                      name="description"
                      autoComplete="off"
                      className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                      rows="4"
                      placeholder="Description"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="githubLink"
                      className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
                    >
                      Github Link
                    </label>
                    <Field
                      id="githubLink"
                      name="githubLink"
                      autoComplete="off"
                      className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                      rows="4"
                      placeholder="Github Link"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="liveLink"
                      className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
                    >
                      Live Link
                    </label>
                    <Field
                      id="liveLink"
                      name="liveLink"
                      autoComplete="off"
                      className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                      rows="4"
                      placeholder="Live Link"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-2 rounded bg-gray-800 font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
                  >
                    Update
                  </button>

                  {error && (
                    <div className="text-red-500 text-center mt-4">{error}</div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        )}
      </Modal>
      {/* new project modal */}
      <Modal
        isOpen={addProjectModal}
        onRequestClose={closeAddProjectModal}
        contentLabel="Proje Ekleme"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: 1000,
          },
        }}
        className="bg-white dark:bg-gray-800 max-w-[calc(100%-20px)] w-[600px] mx-auto p-4 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-300"
      >
        <div className="flex items-center justify-between w-full border-b-[1px] border-gray-200 dark:border-gray-600 pb-3 mb-3">
          <h2 className="font-semibold text-gray-700 dark:text-gray-200">
            Proje Ekle
          </h2>
          <button onClick={closeAddProjectModal} className="text-2xl">
            <IoCloseOutline />
          </button>
        </div>
        <Formik
          initialValues={{
            name: "",
            tools: "",
            description: "",
            githubLink: "",
            liveLink: "",
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const token = localStorage.getItem("token");
              await axios.post("http://localhost:3001/projects/add", values, {
                headers: {
                  Authorization: token,
                },
              });
              closeAddProjectModal();
              toast("Proje eklendi", {
                type: "success",
              });
            } catch (err) {
              console.error(err.response?.data?.message || "Giriş başarısız");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <Form>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Name"
                className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="tools"
                className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
              >
                Tools
              </label>
              <Field
                id="tools"
                name="tools"
                autoComplete="off"
                placeholder="Tools"
                className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
              >
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                autoComplete="off"
                className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                rows="4"
                placeholder="Description"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="githubLink"
                className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
              >
                Github Link
              </label>
              <Field
                id="githubLink"
                name="githubLink"
                autoComplete="off"
                className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                rows="4"
                placeholder="Github Link"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="liveLink"
                className="block text-sm font-semibold text-gray-500 dark:text-gray-400"
              >
                Live Link
              </label>
              <Field
                id="liveLink"
                name="liveLink"
                autoComplete="off"
                className="block w-full p-2 mt-1 text-gray-800 appearance-none border-[1px] border-gray-200 outline-none rounded dark:bg-gray-900/70 dark:border-gray-700 dark:text-gray-300"
                rows="4"
                placeholder="Live Link"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 rounded bg-gray-800 font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Add Project
            </button>

            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}
          </Form>
        </Formik>
      </Modal>
      {/* logout button */}
      <LogoutButton />
      {/* toast */}
      <ToastContainer theme="dark" />
    </div>
  );
}

export default Dashboard;
