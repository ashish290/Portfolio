import "./Navbar.css";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState, useRef } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Ashish</h1>
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={openMenu}
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <li>
          <AnchorLink
            href="#home"
            offset="100"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleSetActive("home")}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#about-me"
            offset="100"
            className={activeLink === "about-me" ? "active" : ""}
            onClick={() => handleSetActive("about-me")}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#skills"
            offset="100"
            className={activeLink === "skills" ? "active" : ""}
            onClick={() => handleSetActive("skills")}
          >
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#project"
            offset="100"
            className={activeLink === "project" ? "active" : ""}
            onClick={() => handleSetActive("project")}
          >
            Project
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#contact"
            offset="100"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleSetActive("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink href="#contact" offset="100">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
