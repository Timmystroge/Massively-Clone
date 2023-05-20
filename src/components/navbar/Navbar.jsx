import React, { useState } from "react";
import "./navbar.css";
import { Close, Facebook, Github, Instagram, Menu, Twitter } from "../Icons";
import displyMobileMenu, { closeMobileMenu } from "../elements/script";

const Navbar = () => {
  // show and hide menu bar state
  const [showMenu, setMenu] = useState(false);

  // show and hide menu bar function
  function menu() {
    const mobileMenu = document.querySelector(".mobileMenu__content");
    // if menu bar is opened, close it. else if menu bar is closed, Open it
    if (!showMenu) {
      setMenu(true);
      displyMobileMenu(mobileMenu);
    } else if (showMenu) {
      setMenu(false);
      closeMobileMenu(mobileMenu);
    }
  }
  return (
    <>
      {/* mobile Menu */}
      <div className="mobile_menu ">
        <div className="hamburger uppercase">
          <div id="menu" onClick={menu}>
            <span className="menuIcon">
              <Menu />
            </span>
            <p className="tracking-wider">Menu</p>
          </div>
        </div>

        <div className="mobileMenu__content">
          <div className="close">
            <span className="closeIcon" onClick={menu}>
              <Close />
            </span>
          </div>
          <ul className="uppercase mobileMenu_links">
            <a href="">
              <li>this is massively</li>
            </a>
            <a href="">
              <li>generic page</li>
            </a>
            <a href="">
              <li>elements reference</li>
            </a>
          </ul>

          <div className="mobileMenu_icon">
            <ul>
              <a href="">
                <li>
                  <Twitter />
                </li>
              </a>
              <a href="">
                <li>
                  <Facebook />
                </li>
              </a>
              <a href="">
                <li>
                  <Instagram />
                </li>
              </a>
              <a href="">
                <li>
                  <Github />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
