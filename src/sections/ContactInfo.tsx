import { FC } from "react";

const ContactInfo: FC = () => {
  return (
    <div className="contact-info__list">
      <div className="contact-info__item col-lg-4">
        <div className="info-item d-flex align-items-center">
          <i className="bi bi-geo-alt flex-shrink-0"></i>
          <div>
            <h3>Location</h3>
            <p>Coruscant, CT 535022</p>
          </div>
        </div>
      </div>
      <div className="contact-info__item col-lg-4">
        <div className="info-item d-flex align-items-center">
          <i className="bi bi-telephone flex-shrink-0"></i>
          <div>
            <h3>Call</h3>
            <a className="contact-info__item-link" href="tel:+1 5589 55488 55">
              +1 5589 55488 55
            </a>
          </div>
        </div>
      </div>
      <div className="contact-info__item col-lg-4">
        <div className="info-item d-flex align-items-center">
          <i className="bi bi-envelope flex-shrink-0"></i>
          <div>
            <h3>Email</h3>
            <a
              className="contact-info__item-link"
              href="mailto:rocreator.help@gamil.com"
            >
              rocreator.help@gamil.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
