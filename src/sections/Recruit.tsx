import { FC } from "react";

import Section from "../components/Section";
import Logo from "../components/images/Logo";

import ContactInfo from "./ContactInfo";

const Recruit: FC = () => {
  return (
    <Section
      sectionName="recruit"
      className="contact"
      containerType="container"
      id="recruit"
      isDecorated={true}
    >
      <ContactInfo />
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <form
            // action="forms/contact.php"
            method="post"
            className="php-email-form aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="row gy-4">
              <div className="col-md-12">
                <Logo showLogoText={true} />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="* Your Full Name:"
                  required={true}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="planetOfOrigin"
                  placeholder="* Your Planet of Origin:"
                  required={true}
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="candidatExperience"
                  rows={9}
                  placeholder="* Describe Your Combat Skills:"
                  required={true}
                ></textarea>
              </div>
              <div className="col-md-12">
                <h5 className="text-center">Choose your preferred role.</h5>
                <select
                  className="form-select mt-3"
                  aria-label="Preferred role in The Empire"
                  required={true}
                  name="preferredRole"
                >
                  <option value="1">Stormtrooper</option>
                  <option value="2">Stormtrooper</option>
                  <option value="3">Officer</option>
                  <option value="4">Engineer</option>
                </select>
              </div>
              <div className="buttons-group col-md-12 text-center">
                {/* <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div> */}
                <button type="submit">
                  Send Message <i className="bi bi-send-fill"></i>
                </button>
                <button className="btn-reset" type="reset">
                  Reset <i className="bi bi-arrow-clockwise"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <h2>Join the Empire Today</h2>
          <p className="lead">
            The future of the galaxy is in your hands. By enlisting in the
            Galactic Empire, you’ll have the opportunity to shape the future,
            uphold the rule of law, and maintain peace across the stars. Submit
            your application below and take the first step toward joining our
            ranks.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Recruit;
