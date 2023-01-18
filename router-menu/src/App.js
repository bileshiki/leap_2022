import "./App.css";
import React from "react";
import { Routes, Route, Link, NavLink, useNavigation } from "react-router-dom";
import { About, Contact, Home } from "./components";

function App() {
  const navigation =useNavigation ();
  const text=navigation.state==="submitting" ? "Saving..." : navigation.state === "loading" ? "Saved!" : "Go";
    return (
    <div className="container col-md-5 mt-5">
      <nav className="container col-md-12">
        <ul className="d-flex justify-content-between">
          <li>
            {/* <Link className="text-decoration-none" to="/">Home</Link> */}
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            {/* <Link className="text-decoration-none" to="/about">About</Link> */}
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            {/* <Link className="text-decoration-none" to="/contact">Contact</Link> */}
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        <input type="text"></input>
        <button type="submit">{text}</button>
      </div>
    </div>
  );
}

export default App;
