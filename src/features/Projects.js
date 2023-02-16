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
          className="project_item new_portfolio"
        >
          <img src="../img/portfolio_landing.png" alt="new portfolio website" />
          <div className="project_details">
            <p className="project_title">
              New Portfolio Website! (work in progress)
            </p>
            <hr />
            <p className="project_description">
              I'm working on a cleaner and more seamless personal site that
              works to not only properly display my skillset, but to give the
              user a more pleasant user experience. I love improving my craft.
              What better way to improve and reflect on how much I've learned
              than enhancing a project I've worked on before?
            </p>
            <div className="technology_stack">
              <p>Gatsby</p>
              <p>React</p>
              <p>GSAP</p>
              <p>JavaScript</p>
            </div>
            <a
              className="project_btn"
              href="https://peak-capstone.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ pointerEvents: "none" }}
            >
              Under Construction
            </a>
            {/* <a
              className="project_btn"
              href="https://github.com/capstone-peak/peak"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a> */}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="project_item peak_performance"
        >
          <img src="../img/peak_landing.png" alt="peak website" />
          <div className="project_details">
            <p className="project_title">
              Peak Website | Fullstack Software Developer
            </p>
            <hr />
            <p className="project_description">
              Designed and implemented a website from scratch with a team of 5
              developers, utilizing Next.js, Figma, Supabase (a Firebase
              alternative), and MaterialUI to create a sleek and seamless
              experience to help users maintain healthy habits and hit their
              fitness goals.
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
              href="https://peakfitness.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <a
              className="project_btn"
              href="https://github.com/peak-fitness/peak"
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
