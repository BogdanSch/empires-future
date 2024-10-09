import { FC, useEffect, useRef } from "react";
import { NullableButton, NullableElement } from "../../types/html-nullables";

const BurgerMenuButton: FC = () => {
  const mobileNavToggleBtnRef = useRef<NullableButton>(null);

  useEffect(() => {
    const mobileNavToggleBtn: NullableButton = mobileNavToggleBtnRef.current;

    if (!mobileNavToggleBtn) return;

    const bodyElement: HTMLElement = document.body;

    const mobileNavToggle = () => {
      bodyElement.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    };

    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);

    const navLinks = document.querySelectorAll("#navmenu a");
    navLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToggle();
        }
      });
    });

    return () => {
      mobileNavToggleBtn.removeEventListener("click", mobileNavToggle);
      navLinks.forEach((navmenu) => {
        navmenu.removeEventListener("click", mobileNavToggle);
      });
    };
  }, []);

  useEffect(() => {
    const toggleDropdown = (e: Event) => {
      e.preventDefault();

      const target = e.currentTarget as HTMLElement;
      const parent = target.parentNode as HTMLElement;
      const nextSibling = parent?.nextElementSibling as NullableElement;

      if (parent) {
        parent.classList.toggle("active");
      }
      if (nextSibling) {
        nextSibling.classList.toggle("dropdown-active");
      }

      e.stopImmediatePropagation();
    };

    const dropdowns = document.querySelectorAll(".navmenu .toggle-dropdown");

    dropdowns.forEach((navmenu) => {
      navmenu.addEventListener("click", toggleDropdown);
    });

    return () => {
      dropdowns.forEach((navmenu) => {
        navmenu.removeEventListener("click", toggleDropdown);
      });
    };
  }, []);

  return (
    <i
      className="mobile-nav-toggle d-xl-none bi bi-list"
      ref={mobileNavToggleBtnRef}
    ></i>
  );
};

export default BurgerMenuButton;
