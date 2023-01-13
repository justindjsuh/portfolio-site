import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <>
      <div className="landing_container">
        <div className="landing_text">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2200"
            className="desc_header"
          >
            Hi there, I'm <span className="landing_name">Justin Suh.</span>
            <br></br>I'm a full-stack web developer.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2400"
            className="landing_desc"
          >
            I aspire to build beautiful things, both visually and functionally
            to enhance user experience. I specialize in the working in the PERN
            stack to bring concepts to life in a tangible way.
            <br></br>
            <br></br>And I love what I do.
          </p>
          <hr />
        </div>
        <svg
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="3000"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200.02 563"
        >
          <polygon
            className="cls-2"
            style={{ fill: "#88e6d0" }}
            points="200.03 563 0 422.47 0 141.4 200.03 0 200.03 563"
          />
        </svg>
      </div>
    </>
  );
};

export default Landing;
