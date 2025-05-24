import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-links">
        <span>All</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Registry</span>
        <span>Gift Cards</span>
        <span>Sell</span>
      </div>
    </nav>
  );
}

export default Nav;
