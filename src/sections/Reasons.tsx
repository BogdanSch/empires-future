import { FC } from "react";
import Section from "../components/Section";

const Reasons: FC = () => {
  return (
    <Section sectionName="reasons" containerType="container" id="reasons">
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="row d-flex align-items-center justify-content-center text-center">
          <div className="resons__group col-lg-12">
            <div className="text-content">
              <h2>Why Join the Galactic Empire?</h2>
              <p>
                The Empire offers unparalleled opportunities for those seeking
                to make a difference. Whether it’s advancing your career,
                gaining access to the galaxy’s most advanced technologies, or
                serving alongside the galaxy's finest, the rewards of joining
                are infinite. Here’s why millions have pledged their loyalty to
                the Emperor:
              </p>
            </div>
          </div>
          <ul className="reasons__list text-center mt-4">
            <li className="card reasons__item">
              <i className="reasons__item-icon bi bi-shield-fill-check"></i>
              <div className="card-contents">
                <h5>Galactic Security:</h5>
                <p> Protecting the galaxy from chaos and rebellion.</p>
              </div>
            </li>
            <li className="card reasons__item">
              <i className="reasons__item-icon bi bi-award-fill"></i>
              <div className="card-contents">
                <h5>Career Advancement:</h5>
                <p> Rapid promotion for those who prove their loyalty.</p>
              </div>
            </li>
            <li className="card reasons__item">
              <i className="reasons__item-icon bi bi-bar-chart-steps"></i>
              <div className="card-contents">
                <h5>Elite Training:</h5>
                <p>
                  Access to state-of-the-art equipment and military academies.
                </p>
              </div>
            </li>
            <li className="card reasons__item">
              <i className="reasons__item-icon bi bi-globe2"></i>
              <div className="card-contents">
                <h5>Empire-Wide Influence:</h5>
                <p>Be part of shaping the future of the galaxy.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Reasons;
