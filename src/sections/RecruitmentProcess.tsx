import { FC } from "react";
import Section from "../components/Section";

const RecruitmentProcess: FC = () => {
  return (
    <Section
      sectionName="recruitment-process"
      containerType="container"
      id="recruitmentProcess"
    >
      <div className="page-title aos-init aos-animate" data-aos="fade">
        <div className="row d-flex align-items-center justify-content-center text-center">
          <div className="recruitment-process__group col-lg-12">
            <h2>Your Journey to Becoming an Imperial Officer</h2>
            <p>
              Joining the Empire is a structured and rewarding journey. Each
              recruit undergoes comprehensive training and evaluation to ensure
              they are ready to serve. Here’s what you can expect:
            </p>
          </div>
          <div className="col-lg-12">
            <div className="horizontal-timeline">
              <ul className="list-inline items">
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date badge bg-info">Day 0</div>
                    <h5 className="pt-2">Application & Screening</h5>
                    <p className="text-muted">
                      Submit your application to join the Galactic Empire. Your
                      background will be carefully reviewed to ensure you meet
                      the basic qualifications.
                    </p>
                  </div>
                </li>
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date badge bg-success">Day 2</div>
                    <h5 className="pt-2">Initial Fitness Test</h5>
                    <p className="text-muted">
                      A series of physical assessments will evaluate your
                      strength, agility, and stamina to determine your
                      capability to serve.
                    </p>
                  </div>
                </li>
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date badge bg-danger">Day 2-30</div>
                    <h5 className="pt-2">Advanced Training</h5>
                    <p className="text-muted">
                      Undergo tactical and combat training in a variety of
                      imperial disciplines. This phase will test your resolve
                      and loyalty.
                    </p>
                  </div>
                </li>
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date badge bg-warning">Day 31</div>
                    <h5 className="pt-2">Graduation</h5>
                    <p className="text-muted">
                      Complete the final evaluation and prove your loyalty.
                      Successful recruits are honored with the rank of Imperial
                      Officer.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RecruitmentProcess;
