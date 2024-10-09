import { FC, useEffect, useRef } from "react";
import { NullableDiv } from "../../types/html-nullables";

const PreLoader: FC = () => {
  const preloaderRef = useRef<NullableDiv>(null);

  useEffect(() => {
    if (preloaderRef.current) {
      const preloader = preloaderRef.current;

      if (preloader) {
        window.addEventListener("load", () => {
          setTimeout(() => {
            preloader.classList.add("loaded");
          }, 1000);
          setTimeout(() => {
            preloader.remove();
          }, 2000);
        });
      }
    }
  }, []);
  return (
    <div id="preloader" ref={preloaderRef}>
      <div className="line"></div>
    </div>
  );
};

export default PreLoader;
