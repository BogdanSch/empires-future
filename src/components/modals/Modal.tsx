import { useEffect, useRef } from "react";
import Modal from "bootstrap/js/dist/modal";
import { NullableDiv } from "../../types/html-nullables";

import Image from "../images/Image";
type ModalProps = {
  id: string;
  title: string;
  show: boolean;
  text: string;
  icon?: string;
  iconAlt?: string;
  onHide: () => void;
};

export default function ModalComponent({
  id,
  title,
  text,
  icon,
  iconAlt = "",
  show,
  onHide,
}: ModalProps) {
  const modalRef = useRef<NullableDiv>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      const modalInstance = new Modal(modal);
      if (show) modalInstance.show();
      else modalInstance.hide();
    }
  }, [id, show, modalRef]);

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      role="dialog"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onHide}
            ></button>
          </div>
          <div className="modal-body text-center">
            {icon && (
              <Image className="modal-image mx-auto" src={icon} alt={iconAlt} />
            )}
            <p className="modal-body__text mt-3">{text}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={onHide}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
