import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ResourceManagement from "./pages/ResourceManagement";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resource" element={<ResourceManagement />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
