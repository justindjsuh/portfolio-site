import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    // window.location.reload(true);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };
  return (
    <div className="footer_container">
      <div className="footer_box">
        <div className="footer_link_container">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
        <Link className="signature_img" to="/">
          <img
            onClick={handleClick}
            src="../img/white_signature.png"
            alt="white signature logo"
          />
        </Link>
        <div className="footer_link_container">
          <a
            href="https://www.linkedin.com/in/justin-suh98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/justindjsuh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
