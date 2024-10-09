import { FC } from "react";
import Section from "../components/Section";

const Goals: FC = () => {
  return (
    <Section sectionName="goals" containerType="container">
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="heading">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Goals</h1>
              <p className="mb-0">
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
              <a href="#contacts" className="cta-btn">
                Available for Hire
                <br />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Goals;
