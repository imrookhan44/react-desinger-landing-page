import React, { useState } from "react";
import cartIcon from "./../assets/Group 1.png";
function Header() {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <>
      <div className="navbar">
        {/* Navbar logo */}
        <div className="nav-header">
          <div className="header_logo">
            <h3>Rivo</h3>
          </div>
        </div>
        {/* responsive navbar toggle button */}
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>
        {/* Navbar items */}
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Project</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>

        </div>
        <div>
          <div className="login_cart">
            <div className="image">
              <img src={cartIcon} alt="" />
            </div>
            <div className="button">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid" style={{
        zIndex: "99999", position: "sticky", top: "0",
        background: "#C2EFD4"
      }}>
        <div className="row">
          <div className="col-md-4 header_logo">
            <h3>Rivo</h3>
          </div>
          <div className="col-md-4 mt-2">
            <div className={isMobile ? "nav-links-mobile" : "menu_links"}>
              <ul>
                <li>Home</li>
                <li>shop</li>
                <li>features</li>
                <li>contact</li>
              </ul>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2 login_cart">
            <div className="image">
              <img src={cartIcon} alt="" />
            </div>
            <div className="button">
              <button>Login</button>
            </div>
          </div>
        </div>
        <button className="mobile-menu-icon">
          {
            isMobile ? <i className="fa fa-times" > </i> : <i className="fa fa-bars" > </i>
          }
        </button>
      </div> */}
    </>
  );
}

export default Header;
