import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            ©<span>Copyright</span>{" "}
            <strong className="px-1 sitename">Empire's Future</strong>{" "}
            <span>All Rights Reserved by Bohdan Shcherbak</span>{" "}
          </p>
          <div className="mt-2">
            Based on <a href="https://www.starwars.com/">Star Wars</a> by George
            Lucas
          </div>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href="">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
