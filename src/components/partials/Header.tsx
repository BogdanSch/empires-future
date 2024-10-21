import { FC, useEffect, useRef } from "react";
import { NullableElement } from "../../types/html-nullables";

import Image from "../images/Image";
import BurgerMenuButton from "../buttons/BurgerMenuButton";
import EmpireLogoIcon from "/assets/img/Galactic_Empire_Logo.png";

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
          <Image
            className="logo"
            src={EmpireLogoIcon}
            alt="Empire Logo White"
          />
          <h1 className="sitename">Empire's Future</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#goals">Goals</a>
            </li>
            <li className="dropdown">
              <a href="/">
                <span>For Recruiters</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#recruitmentProcess">Recruitment Process</a>
                </li>
                <li>
                  <a href="#recruit">Recruit</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#reasons">Reasons</a>
            </li>
            <li>
              <a href="#empireMap">Map</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
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
