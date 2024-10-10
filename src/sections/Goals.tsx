import { FC } from "react";

import Section from "../components/Section";
import Image from "../components/Image";

import StarDestroyerImage from "/public/assets/img/star-destroyer.png";

const Goals: FC = () => {
  return (
    <Section sectionName="goals" containerType="container">
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="heading">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h2>Unite the Galaxy</h2>
              <p className="mb-0">
                The Galactic Empire stands as a beacon of strength, order, and
                prosperity in an otherwise chaotic galaxy. Our mission is clear:
                to maintain peace, crush rebellion, and ensure that the galaxy
                remains united under the firm and just rule of the Emperor. By
                joining the Empire, you become part of a grand design that
                secures a brighter, more prosperous future for all.
              </p>
              <a href="#contacts" className="cta-btn">
                Join Us.
              </a>
            </div>
            <div className="col-lg-4">
              <Image
                className="d-block w-100"
                src={StarDestroyerImage}
                alt="Empire's Star Destroyer Ship"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Goals;
