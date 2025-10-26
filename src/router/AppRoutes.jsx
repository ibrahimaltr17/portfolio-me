import React from "react";
import { Routes, Route } from "react-router";
import Home from "../App"; // your current App.jsx content as a Home page
import ProjectDetails from "../components/pages/ProjectDetails/ProjectDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Home />} /> {/* Scroll portfolio */}
      <Route path="/project/:id" element={<ProjectDetails />} /> {/* Details page */}
      <Route path="*" element={<div className="text-white text-center mt-20">Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
