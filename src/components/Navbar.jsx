import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Optional CSS file

const Navbar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>FieldMate</h2>
      <div className="navbar-left">
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Product</Link>
        <Link to="/sell">Sell Product</Link>
        <Link to="/sales">Sales History</Link>
      </div>

      <div className="navbar-right">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;