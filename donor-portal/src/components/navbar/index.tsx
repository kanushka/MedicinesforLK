import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import { useAuthContext } from "@asgardeo/auth-react";

export default function NavBar() {
  const { state, signIn, signOut } = useAuthContext();

  const handleLogout = () => {
    signOut();
  };

  const handleLogin = () => {
    signIn();
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="logo" />
      </Link>
      <div className="nav-links">
        <NavLink to="/about-us" className="nav-link">
          About
        </NavLink>
        <NavLink exact to="/donors" className="nav-link">
          How to Donate
        </NavLink>
        <NavLink to="/suppliers" className="nav-link">
          Medical Suppliers
        </NavLink>
        <NavLink to="/news-room" className="nav-link">
          Newsroom
        </NavLink>
        {state.isAuthenticated ? (
          <button
            className="logout-btn"
            type="button"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        ) : (
          <button
            className="login-btn"
            type="button"
            onClick={() => handleLogin()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
