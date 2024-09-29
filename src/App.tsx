import { FC } from "react";

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import ScrollTop from "./components/scroll/ScrollTop";
import PreLoader from "./components/loader/PreLoader";

import AOS from "aos";
import "aos/dist/aos.css";

const App: FC = () => {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  return (
    <>
      <Header />
      <main className="main"></main>
      <Footer />
      <ScrollTop />
      <PreLoader />
    </>
  );
};

export default App;
