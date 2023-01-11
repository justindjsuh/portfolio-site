const StickyHeader = (props) => {
  return (
    <div className="sticky_header">
      <div className="sticky_nav_btns">
        <a
          className={`sticky_nav_btn ${props.aboutIsVisible ? "active" : ""}`}
          href="#about"
        >
          About
        </a>
        <a
          className={`sticky_nav_btn ${
            props.experienceIsVisible ? "active" : ""
          }`}
          href="#experience"
        >
          Experience
        </a>
        <a
          className={`sticky_nav_btn ${
            props.projectsIsVisible ? "active" : ""
          }`}
          href="#projects"
        >
          Projects
        </a>
      </div>
    </div>
  );
};

export default StickyHeader;
