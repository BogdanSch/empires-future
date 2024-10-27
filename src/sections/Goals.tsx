import { FC, useState, useEffect } from "react";

import Section from "../components/Section";
import Image from "../components/images/Image";

import StarDestroyerImage from "/public/assets/img/star-destroyer.webp";
const PARALLAX_SCROLL_STRENGTH = 0.7;

const Goals: FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section sectionName="goals" containerType="container" id="goals">
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="heading">
          <div className="row d-flex align-items-center justify-content-center text-center">
            <div className="goals__group col-lg-5 order-2 order-lg-1">
              <h2>Unite the Galaxy</h2>
              <p className="mb-0">
                The Galactic Empire stands as a beacon of strength, order, and
                prosperity in an otherwise chaotic galaxy. Our mission is clear:
                to maintain peace, crush rebellion, and ensure that the galaxy
                remains united under the firm and just rule of the Emperor. By
                joining the Empire, you become part of a grand design that
                secures a brighter, more prosperous future for all.
              </p>
              <a href="#recruit" className="cta-btn">
                Join Us.
              </a>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
              <Image
                className="goals__image d-block w-100"
                src={StarDestroyerImage}
                alt="Empire's Star Destroyer Ship"
                style={{
                  transform: `translateY(${
                    offsetY * PARALLAX_SCROLL_STRENGTH
                  }px)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Goals;
