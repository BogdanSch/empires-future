import { FC } from "react";

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

const App: FC = () => {
  AOS.init();

  return (
    <>
      <Header />
      <main className="main"></main>
      <Footer />
    </>
  );
};

export default App;
