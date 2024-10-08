import { FC, useEffect, useRef } from "react";

const BurgerMenuButton: FC = () => {
  const mobileNavToggleBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (mobileNavToggleBtnRef.current) {
      const mobileNavToggleBtn = mobileNavToggleBtnRef.current;
      const bodyElement: HTMLElement = document.body;

      function mobileNavToogle() {
        bodyElement.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      }
      mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

      document.querySelectorAll("#navmenu a").forEach((navmenu): void => {
        navmenu.addEventListener("click", (): void => {
          if (document.querySelector(".mobile-nav-active")) {
            mobileNavToogle();
          }
        });
      });
    }
  }, [mobileNavToggleBtnRef]);

  useEffect(() => {
    const toggleDropdown = (e: Event): void => {
      e.preventDefault();

      const target = e.currentTarget as HTMLElement;
      const parent = target.parentNode as HTMLElement;
      const nextSibling = parent.nextElementSibling as HTMLElement;

      parent.classList.toggle("active");
      nextSibling.classList.toggle("dropdown-active");

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
