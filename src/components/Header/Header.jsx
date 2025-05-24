import React from "react";
import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <header className="amazon-header">
        <div className="header-left">
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
              className="Logo"
            />
          </a>
          <div className="location">
            <SlLocationPin />
          <div>
            <p>Deliver to</p>
            <span>USA</span>
          </div>
        </div>
        </div>

         <div className="header-center">
          <select>
            <option value="all">All</option>
          </select>
          <input type="text" placeholder="search product" />
          <button>
          <BsSearch />
          </button>
        </div>

        <div className="header-right">
          <div className="flag">
          <img
            src="https://flagcdn.com/us.svg"
            alt="US Flag"
            width="25"/>
            <select>
              <option value="en">EN</option>
            </select>
          </div>

          <a href="/">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
            </a>

          <a href="/">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          <a href="/cart" className="cart">
            <BiCart />
            <span>O</span>
          </a>
        </div>
    </header>
  );
}

export default Header;
