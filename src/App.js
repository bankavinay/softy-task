// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './Pages/SignUp';
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";

const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            user ? <Dashboard user={user} /> : <SignIn setUser={setUser} />
          }
        />
        <Route path="/" element={<SignIn setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;