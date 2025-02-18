import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | Kemal Gündoğdu";
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3001/auth/dashboard", {
          headers: {
            Authorization: token,
          },
        });
        console.log("Dashboard verisi:", response.data);
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

  return (
    <div className="min-h-screen max-w-2xl mx-auto font-inter">
      <Navbar />
      <div className="px-6 py-12 mt-16 text-black dark:text-white/70">
        Dashboard
      </div>
    </div>
  );
}

export default Dashboard;
