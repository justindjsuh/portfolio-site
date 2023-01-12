import { useRef, useEffect } from "react";
const Projects = (props) => {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      props.setProjectsIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        props.setExperienceIsVisible(false);
        props.setContactIsVisible(false);
      }
    });
    observer.observe(myRef.current);
  }, [props]);

  return (
    <div className="project_container">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="project_header"
      >
        <p>PROJECTS</p>
        <hr />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        className="project_list"
      >
        <div className="project_item alibi_esports">
          <img
            src="../img/alibiesport_project.png"
            alt="alibi esports website"
          />
          <div className="project_details">
            <p className="project_title">
              Alibi Esports Website | Fullstack Software Developer
            </p>
            <hr />
            <p className="project_description">
              Designed and implemented the website from scratch, incorporating
              UX/UI, form handling, RESTful API, and database development to
              create an interactive and dynamic environment that handled
              communication and tournament registration while streamlining the
              user experience.
            </p>
            <div className="technology_stack">
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Express.js</p>
              <p>Node.js</p>
              <p>PostgreSQL</p>
            </div>
            <a
              className="project_btn"
              href="https://alibi-esports.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              className="project_btn"
              href="https://github.com/justindjsuh/alibi-esports-fe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <span ref={myRef}></span>
    </div>
  );
};

export default Projects;
