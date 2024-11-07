import { useEffect, useRef } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NullableDiv } from "../../types/html-nullables";

type ModalProps = {
  id: string;
  title: string;
  show: boolean;
  text: string;
  onHide: () => void; // Updated type for onHide
};

export default function Modal({ id, title, text, show, onHide }: ModalProps) {
  const modalRef = useRef<NullableDiv>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) {
      const modalInstance = new bootstrap.Modal(document.getElementById(id));
      if (show) modalInstance.show();
      else modalInstance.hide(); // Hide modal if show is false
    }
  }, [id, show]);

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      role="dialog"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onHide} // Now `onHide` is a function callback
            ></button>
          </div>
          <div className="modal-body">{text}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-bs-dismiss="modal"
              onClick={onHide} // Now `onHide` is a function callback
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
