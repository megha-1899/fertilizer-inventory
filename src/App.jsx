import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import SellProduct from "./pages/SellProduct";
import SalesHistory from "./pages/SalesHistory";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ On initial render, check login status from localStorage
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn") === "true";
    console.log("Logged In from localStorage:", loggedInStatus);
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <>
      {/* ✅ Show Navbar only if user is logged in */}
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}

      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/sell" element={<SellProduct />} />
            <Route path="/sales" element={<SalesHistory />} />
            <Route path="*" element={<Dashboard />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;