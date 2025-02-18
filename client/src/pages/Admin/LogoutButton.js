import React from "react";

function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/admin/login";
  };
  return (
    <button
      onClick={handleLogout}
      className="fixed right-5 bottom-5 text-white dark:text-black p-3 rounded bg-black dark:bg-white text-sm"
    >
      Çıkış Yap
    </button>
  );
}

export default LogoutButton;
