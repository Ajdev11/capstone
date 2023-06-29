import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { path } from "./Router/router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ConfirmCode from "./pages/Confirmcode";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.DASHBOARD} element={<Dashboard />} />
        <Route path={path.CONFIRMCODE} element={<ConfirmCode />} />
      </Routes>
    </Router>
  );
}

export default App;
