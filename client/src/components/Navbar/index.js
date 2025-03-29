import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 mt-6 z-50">
      <div className="max-w-2xl px-4 py-2 bg-gray-300/30 dark:bg-white/10 backdrop-blur-md rounded-2xl mx-2">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="font-medium hover:text-black/70 transition-colors"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1892224113348919296/QSNgyk2G_400x400.jpg"
              alt="kemal gundogdu"
              className="w-10 h-10 rounded-full bg-[#E2E2E2]"
            />
          </NavLink>
          <div className="flex items-center gap-6 text-sm">
            <NavLink
              to="/"
              className="hover:text-black/70 dark:text-white/70 dark:hover:text-white/40 transition-colors"
            >
              hakkımda
            </NavLink>
            <NavLink
              to="/projects"
              className="hover:text-black/70 dark:text-white/70 dark:hover:text-white/40 transition-colors"
            >
              projeler
            </NavLink>
            <NavLink
              to="/photos"
              className="hover:text-black/70 dark:text-white/70 dark:hover:text-white/40 transition-colors"
            >
              fotoğraflar
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
