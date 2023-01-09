const StickyHeader = (props) => {
  return (
    <div className="sticky_header">
      <div className="sticky_nav_btns">
        <a
          className={`sticky_nav_btn ${props.isVisible ? 'active' : ''}`}
          href="#about"
        >
          About
        </a>
        <a href="#" className="sticky_nav_btn">
          Projects
        </a>
        <a href="#" className="sticky_nav_btn">
          Contact
        </a>
      </div>
    </div>
  );
};

export default StickyHeader;
