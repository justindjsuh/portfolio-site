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
      <div className="project_header">
        <p>PROJECTS</p>
        <hr />
      </div>
      <div className="project_list">
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
            <p>
              Built a full-stack website for an e-sports organization that seeks
              to provide competitive outlets for gaming communities that don’t
              have the opportunity to participate in competitive events.
            </p>
            <div className="technology_stack">
              <p>JavaScript</p>
              <p>React.js</p>
              <p>Express.js</p>
              <p>Node.js</p>
              <p>PostgreSQL</p>
            </div>
            <button className="project_btn">Website</button>
            <button className="project_btn">Github</button>
          </div>
        </div>
      </div>
      <span ref={myRef}></span>
    </div>
  );
};

export default Projects;
