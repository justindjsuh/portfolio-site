import { useState } from "react";
import { Link } from "react-router-dom";
import ModalContact from "./ModalContact";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = () => {
    setShowModal(true);
  };

  const handleClick = () => {
    window.location.reload(true);
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img
          onClick={handleClick}
          src="../img/white_signature.png"
          alt="signature logo"
          className="signature_img"
        />
      </Link>
      <div className="nav_btns">
        <a href="#about" className="nav_btn">
          About
        </a>
        <a href="#experience" className="nav_btn">
          Experience
        </a>
        <a href="#projects" className="nav_btn">
          Projects
        </a>
      </div>
      <div className="nav_button">
        <button className="contact_button" onClick={handleModalClick}>
          Contact
        </button>
      </div>
      {showModal ? <ModalContact setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default Header;
