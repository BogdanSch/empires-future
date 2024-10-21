import { FC } from "react";

import Section from "../components/Section";
import ZoomImage from "../components/images/ZoomImage";

import galaxyMapImage from "/assets/img/star-wars-galaxy-map.png";

const EmpireMap: FC = () => {
  return (
    <Section
      sectionName="empire-map"
      containerType="container"
      id="empireMap"
      isDecorated={true}
    >
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="row d-flex align-items-center justify-content-center text-center">
          <div className="text-content">
            <h2>Interactive Map</h2>
            <p>
              The Galactic Empire’s influence spans across the stars. From the
              Core Worlds to the Outer Rim, our forces maintain peace and
              security in every sector. Explore key planets and bases under
              Imperial control by interacting with our galactic map below.
            </p>
          </div>
          <ZoomImage
            src={galaxyMapImage}
            alt="The overview of the Galaxy"
            zoomFactor={2}
            zoomBoxSize={150}
          />
        </div>
      </div>
    </Section>
  );
};

export default EmpireMap;
