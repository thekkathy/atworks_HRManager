import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import UserTabBar from "./pages/UserTabBar";

import Home from "./pages/Home";
import ResourceManagement from "./pages/ResourceManagement";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/resource" element={<Outlet />}>
            <Route path="" element={<ResourceManagement />} />
            <Route path="addUser" element={<UserTabBar addMode={true} />} />
            <Route path=":userId" element={<Outlet />}>
              <Route path="" element={<UserTabBar addMode={false} />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
