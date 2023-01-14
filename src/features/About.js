/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from "react";

const About = (props) => {
  const [showButton, setShowButton] = useState(false);
  const myRef = useRef();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      props.setAboutIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        props.setExperienceIsVisible(false);
      }
    });
    observer.observe(myRef.current);

    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 800 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, [props]);

  return (
    <>
      <div className="about_container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          ref={myRef}
          className="about_header"
        >
          <p>ABOUT ME</p>
          <hr />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="about_content"
        >
          <img src="../img/pfp.jpg" alt="Justins profile" />
          <div className="about_me">
            <p>Justin Suh</p>
            <hr />
            <p>
              I'm a full-stack web developer with a B.S. in Cyber Security from
              Drexel University and a recent Fullstack Academy graduate. As a
              problem solver at heart, I enjoyed solving the intricacies of the
              puzzles software engineering provided.
            </p>
            <p>
              Creativity and technology have always been my two greatest joys in
              life. Mixing the two brought web development into my horizon and
              has since become my passion. As someone who loves learning new
              things, I can't wait to see where the path of software engineering
              will lead me! I'm not sure where I'll be in ten years, but I hope
              to grow as person, have fun and create some awesome things on the
              way!
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          className="soft_skills_header"
        >
          <p>SOFT SKILLS</p>
          <hr />
        </div>
        <div className="about_soft_skills">
          <div className="about_badges">
            <div data-aos="flip-left" data-aos-delay="800" className="badge">
              <img src="../img/teamwork.png" alt="Team Player Badge" />
              <p>Team Player</p>
            </div>
            <div data-aos="flip-left" data-aos-delay="1000" className="badge">
              <img src="../img/adaptable.png" alt="Adaptable Badge" />
              <p>Adaptable</p>
            </div>
            <div data-aos="flip-left" data-aos-delay="1200" className="badge">
              <img src="../img/communication.png" alt="Communicative Badge" />
              <p>Communicative</p>
            </div>
            <div data-aos="flip-left" data-aos-delay="1400" className="badge">
              <img src="../img/solver.png" alt="Problem Solver Badge" />
              <p>Problem Solver</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1400"
          className="tech_skills_header"
        >
          <p id="experience">TECHNICAL SKILLS</p>
          <hr />
        </div>
        <div className="tech_skills_container">
          <table>
            <tbody>
              <tr
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="1600"
              >
                <td>
                  <span className="tech_divider">//</span> JavaScript
                </td>
                <td>
                  <span className="tech_divider">//</span> React.js
                </td>
                <td>
                  <span className="tech_divider">//</span> Express.js
                </td>
                <td>
                  <span className="tech_divider">//</span> Node.js
                </td>
                <td>
                  <span className="tech_divider">//</span> PostgreSQL
                </td>
              </tr>
              <tr
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="1800"
              >
                <td>
                  <span className="tech_divider">//</span> Git
                </td>
                <td>
                  <span className="tech_divider">//</span> Axios
                </td>
                <td>
                  <span className="tech_divider">//</span> CSS3
                </td>
                <td>
                  <span className="tech_divider">//</span> HTML5
                </td>
                <td>
                  <span className="tech_divider">//</span> Sequelize
                </td>
              </tr>
              <tr
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="2000"
              >
                <td>
                  <span className="tech_divider">//</span> RESTful API
                </td>
                <td>
                  <span className="tech_divider">//</span> Responsive Design
                </td>
                <td>
                  <span className="tech_divider">//</span> VS Code
                </td>
                <td>
                  <span className="tech_divider">//</span> MongoDB
                </td>
                <td>
                  <span className="tech_divider">//</span> UX/UI
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {showButton && (
        <div className="scroll_to_top">
          <button className="to_top_btn" onClick={handleScrollToTop}>
            <svg
              width="60px"
              height="80px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.657 11.2929L16.2428 12.7071L12.0002 8.46444L7.75748 12.7071L6.34326 11.2929L12.0001 5.63605L17.657 11.2929Z"
                fill="#000000"
              />
              <path
                d="M17.657 16.9497L16.2428 18.3639L12.0002 14.1213L7.75748 18.364L6.34326 16.9498L12.0001 11.2929L17.657 16.9497Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default About;
