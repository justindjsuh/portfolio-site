import { Link } from "react-router-dom";

const Header = () => {
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
        <a href="#contact" className="nav_btn">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
