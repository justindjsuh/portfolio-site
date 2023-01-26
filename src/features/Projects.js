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
      <div className="project_list">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="project_item peak_performance"
        >
          <img src="../img/peak_landing.png" alt="peak website" />
          <div className="project_details">
            <p className="project_title">
              Peak Website | Fullstack Software Developer (in progress)
            </p>
            <hr />
            <p className="project_description">
              Designed and implemented the website from scratch with a team of
              5, utilizing Next.js, Figma, Supabase (a Firebase alternative),
              and MaterialUI to create a sleek and seamless experience to help
              users maintain a healthy habits and hit fitness goals.
            </p>
            <div className="technology_stack">
              <p>Next.js</p>
              <p>MaterialUI</p>
              <p>Supabase</p>
              <p>Node.js</p>
              <p>PostgreSQL</p>
            </div>
            <a
              className="project_btn"
              href="https://www.figma.com/file/zOEOEwVPwMwR01Dh6fGvs9/peak-performance?node-id=0%3A1&t=W9siTAKEKSdtWtzO-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>
            <a
              className="project_btn"
              href="https://github.com/capstone-peak/peak"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="project_item alibi_esports"
        >
          <img
            src="../img/alibiesports_project.png"
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
