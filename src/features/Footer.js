const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_box">
        <div className="footer_link_container">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
        <img src="../img/white_signature.png" alt="white signature logo" />
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
