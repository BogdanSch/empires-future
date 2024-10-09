import { FC, useEffect, useRef } from "react";
import { NullableElement } from "../../types/html-nullables";

import BurgerMenuButton from "../buttons/BurgerMenuButton";

const Header: FC = () => {
  const headerRef = useRef<NullableElement>(null);

  useEffect(() => {
    function toggleScrolled() {
      if (!headerRef.current) return;

      const selectBody = document.body;
      const selectHeader = headerRef.current;
      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;

      if (selectBody) {
        window.scrollY > 100
          ? selectBody.classList.add("scrolled")
          : selectBody.classList.remove("scrolled");
      }
    }
    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, [headerRef]);

  return (
    <header
      id="header"
      className="header d-flex align-items-center sticky-top"
      ref={headerRef}
    >
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          {/* <img src="assets/img/logo.png" alt=""> */}
          <i className="bi bi-camera"></i>
          <h1 className="sitename">Empire's Future</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li className="dropdown">
              <a href="gallery.html">
                <span>Gallery</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="gallery.html">Nature</a>
                </li>
                <li>
                  <a href="gallery.html">People</a>
                </li>
                <li>
                  <a href="gallery.html">Architecture</a>
                </li>
                <li>
                  <a href="gallery.html">Animals</a>
                </li>
                <li>
                  <a href="gallery.html">Sports</a>
                </li>
                <li>
                  <a href="gallery.html">Travel</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <BurgerMenuButton />
        </nav>
        <div className="header-social-links">
          <a href="#" className="twitter">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
