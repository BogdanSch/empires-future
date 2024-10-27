import { FC } from "react";

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import ScrollTop from "./components/scroll/ScrollTop";
import PreLoader from "./components/loader/PreLoader";

import Goals from "./sections/Goals";
import Reasons from "./sections/Reasons";
import RecruitmentProcess from "./sections/RecruitmentProcess";
import EmpireMap from "./sections/EmpireMap";
import Testimonials from "./sections/Testimonials";

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
      <main className="main">
        <Goals />
        <Reasons />
        <RecruitmentProcess />
        <EmpireMap />
        <Testimonials />
      </main>
      <Footer />
      <ScrollTop />
      <PreLoader />
    </>
  );
};

export default App;
