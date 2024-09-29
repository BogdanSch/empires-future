import { FC, useEffect, useRef } from "react";

const ScrollTop: FC = () => {
  const scrollTopRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (scrollTopRef.current) {
      const scrollTop = scrollTopRef.current;

      function toggleScrollTop() {
        if (scrollTop) {
          window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
        }
      }

      scrollTop.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      window.addEventListener("load", toggleScrollTop);
      document.addEventListener("scroll", toggleScrollTop);

      return () => {
        window.removeEventListener("load", toggleScrollTop);
        document.removeEventListener("scroll", toggleScrollTop);
      };
    }
  }, []);

  return (
    <a
      href="#"
      id="scroll-top"
      className="scroll-top d-flex align-items-center justify-content-center"
      ref={scrollTopRef}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTop;
