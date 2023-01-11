/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect } from "react";

const About = (props) => {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      props.setAboutIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        props.setExperienceIsVisible(false);
      }
    });
    observer.observe(myRef.current);
  }, [props]);

  return (
    <>
      <div className="about_container">
        <div ref={myRef} className="about_header">
          <p>ABOUT</p>
          <hr />
        </div>
        <div className="about_content">
          <img src="../img/pfp.jpg" alt="Justins profile" />
          <div className="about_me">
            <p>Justin Suh</p>
            <hr />

            <p>
              Web developer with a Bachelor’s in Cyber Security from Drexel
              University and a recent Fullstack Academy graduate. I fell in love
              with coding because I’m a problem solver at heart. I love figuring
              out intricacies of problem and spending hours on solving them. I
              enjoy photography and anything tech related. Mixing the two
              together brought web development into my horizon and has ever
              since become my passion.
            </p>
          </div>
        </div>
        <div className="soft_skills_header">
          <p>SOFT SKILLS</p>
          <hr />
        </div>
        <div className="about_soft_skills">
          <div className="about_badges">
            <div className="badge">
              <img src="../img/teamwork.png" alt="Team Player Badge" />
              <p>Team Player</p>
            </div>
            <div className="badge">
              <img src="../img/adaptable.png" alt="Adaptable Badge" />
              <p>Adaptable</p>
            </div>
            <div className="badge">
              <img src="../img/communication.png" alt="Communicative Badge" />
              <p>Communicative</p>
            </div>
            <div className="badge">
              <img src="../img/solver.png" alt="Problem Solver Badge" />
              <p>Problem Solver</p>
            </div>
          </div>
        </div>
        <div className="tech_skills_header">
          <p id="experience">TECHNICAL SKILLS</p>
          <hr />
        </div>
        <div className="tech_skills_container">
          <table>
            <tr>
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
            <tr>
              <td>
                <span className="tech_divider">//</span> React
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
            <tr>
              <td>
                <span className="tech_divider">//</span> Git
              </td>
              <td>
                <span className="tech_divider">//</span> RESTful API
              </td>
              <td>
                <span className="tech_divider">//</span> VS Code
              </td>
              <td>
                <span className="tech_divider">//</span> Responsive Design
              </td>
              <td>
                <span className="tech_divider">//</span> UX/UI
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default About;
