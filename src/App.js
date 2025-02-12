import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photos from "./pages/Photos";

import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

function App() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
      setDark(!dark);
      document.body.classList.toggle("dark");
      document.documentElement.classList.toggle('bg-black');
      localStorage.setItem("dark", !dark);
  }

  // localstorage dark mode 
  useEffect(() => {
    const isDark = localStorage.getItem("dark");
    if (isDark==="true") {
      setDark(true);
      document.body.classList.add("dark");
      document.documentElement.classList.add('bg-black');
    } else {
      setDark(false);
      document.body.classList.remove("dark");
      document.documentElement.classList.remove('bg-black');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black mx-auto font-inter">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </BrowserRouter>
      <button className="fixed left-5 bottom-5 text-white dark:text-black p-3 rounded bg-black dark:bg-white text-sm" onClick={darkModeHandler}>
        {dark ? <MdOutlineWbSunny /> : <IoMoonOutline />}
      </button>
    </div>
  );
}

export default App;
