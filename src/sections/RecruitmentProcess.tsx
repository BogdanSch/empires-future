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
                    <div className="event-date badge bg-info">2 June</div>
                    <h5 className="pt-2">Event One</h5>
                    <p className="text-muted">
                      It will be as simple as occidental in fact it will be
                      Occidental Cambridge friend
                    </p>
                    <div>
                      <a
                        href="#"
                        data-mdb-ripple-init
                        className="btn btn-primary btn-sm"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date badge bg-success">5 June</div>
                    <h5 className="pt-2">Event Two</h5>
                    <p className="text-muted">
                      Everyone realizes why a new common language one could
                      refuse translators.
                    </p>
                    <div>
                      <a
                        href="#"
                        data-mdb-ripple-init
                        className="btn btn-primary btn-sm"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date badge bg-danger">7 June</div>
                    <h5 className="pt-2">Event Three</h5>
                    <p className="text-muted">
                      If several languages coalesce the grammar of the resulting
                      simple and regular
                    </p>
                    <div>
                      <a
                        href="#"
                        data-mdb-ripple-init
                        className="btn btn-primary btn-sm"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item items-list">
                  <div className="px-4">
                    <div className="event-date badge bg-warning">8 June</div>
                    <h5 className="pt-2">Event Four</h5>
                    <p className="text-muted">
                      Languages only differ in their pronunciation and their
                      most common words.
                    </p>
                    <div>
                      <a
                        href="#"
                        data-mdb-ripple-init
                        className="btn btn-primary btn-sm"
                      >
                        Read more
                      </a>
                    </div>
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
