import { useEffect, useRef } from "react";

const ModalContact = ({ setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
      document.body.classList.remove("modal-active");
    }
  };

  useEffect(() => {
    document.body.classList.add("modal-active");
  });

  return (
    <div id="modal-container" className="one">
      <div onClick={closeModal} ref={modalRef} className="modal-background">
        <div className="modal">
          <div className="modal_text">
            <p>Contact me</p>
            <p className="modal_email">justindjsuh@gmail.com</p>
          </div>
          <div className="modal_links">
            <a href="https://github.com/justindjsuh">GITHUB</a>
            <a href="https://www.linkedin.com/in/justin-suh98/">LINKEDIN</a>
          </div>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 147 147"
          >
            <polygon class="cls-1" points="147 0 147 147 0 147 147 0" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ModalContact;
