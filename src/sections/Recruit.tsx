import { ChangeEvent, FC, FormEvent, useState } from "react";
import submitSheetDBData from "../utils/sheetDB/submition";

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store";
import {
  setShowConfirmModal,
  setShowErrorModal,
} from "../app/features/recruitNotificationModal/recruitNotificationModal";

import Section from "../components/Section";
import Logo from "../components/images/Logo";
import Modal from "../components/modals/Modal";
import ContactInfo from "./ContactInfo";

import successIcon from "/assets/img/winner.png";
import errorIcon from "/assets/img/error.png";

const Recruit: FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    planetOfOrigin: "",
    email: "",
    candidatExperience: "",
    preferredRole: "Stormtrooper",
  });

  const dispatch: AppDispatch = useDispatch();
  const showConfirmModal = useSelector(
    (state: RootState) => state.recruitNotificationModal.showConfirmModal
  );

  const showErrorModal = useSelector(
    (state: RootState) => state.recruitNotificationModal.showErrorModal
  );

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const submissionResult = await submitSheetDBData(formData);

      if (submissionResult) {
        dispatch(setShowConfirmModal(true));
        clearForm();
      } else {
        dispatch(setShowErrorModal(true));
      }
    } catch (error) {
      dispatch(setShowErrorModal(true));
      console.error(error);
    }
  };

  const clearForm = (): void => {
    setFormData({
      fullName: "",
      planetOfOrigin: "",
      email: "",
      candidatExperience: "",
      preferredRole: "Stormtrooper",
    });
  };

  return (
    <>
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
              method="post"
              className="php-email-form aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
              onSubmit={handleSubmit}
              id="recruitForm"
            >
              <div className="row gy-4">
                <div className="col-md-12">
                  <Logo showLogoText={true} />
                  <div id="formNotice" className="form-text text-center mt-4">
                    All the fields marked with * are required to be filled in.
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="fullName"
                    id="fullNameInput"
                    className="form-control"
                    placeholder="* Your Full Name:"
                    value={formData.fullName}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="planetOfOrigin"
                    id="planetOfOriginInput"
                    placeholder="* Your Planet of Origin:"
                    value={formData.planetOfOrigin}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="emailInput"
                    placeholder="* Your Email Address:"
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="candidatExperience"
                    id="candidatExperienceText"
                    rows={9}
                    placeholder="* Describe Your Combat Skills:"
                    value={formData.candidatExperience}
                    onChange={handleChange}
                    required={true}
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <h5 className="text-center">Choose your preferred role.</h5>
                  <select
                    name="preferredRole"
                    id="preferredRoleOptions"
                    className="form-select mt-3"
                    aria-label="Preferred role in The Empire"
                    value={formData.preferredRole}
                    onChange={handleChange}
                    required={true}
                  >
                    <option value="1">Stormtrooper</option>
                    <option value="2">Pilot</option>
                    <option value="3">Officer</option>
                    <option value="4">Engineer</option>
                  </select>
                </div>
                <div className="buttons-group col-md-12 text-center">
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
              uphold the rule of law, and maintain peace across the stars.
              Submit your application below and take the first step toward
              joining our ranks.
            </p>
          </div>
        </div>
      </Section>
      <Modal
        id="confirm-modal"
        title="Confirmation message"
        text="Your request was successfully sent!"
        icon={successIcon}
        iconAlt="Success notification icon"
        show={showConfirmModal}
        onHide={() => dispatch(setShowConfirmModal(false))}
      />
      <Modal
        id="error-modal"
        title="Error message"
        text="There was an error, please try again later!"
        icon={errorIcon}
        iconAlt="Error notification icon"
        show={showErrorModal}
        onHide={() => dispatch(setShowErrorModal(false))}
      />
    </>
  );
};

export default Recruit;
