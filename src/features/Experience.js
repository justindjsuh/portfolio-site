import { useRef, useEffect, useState } from "react";
import Bloomberg from "./experience/Bloomberg";
import FSA from "./experience/FSA";
import Drexel from "./experience/Drexel";
import SIG from "./experience/SIG";

const Experience = (props) => {
  const [fsa, setFSA] = useState(true);
  const [bloomberg, setBloomberg] = useState(false);
  const [sig, setSIG] = useState(false);
  const [drexel, setDrexel] = useState(false);

  const myRef = useRef();

  const handleFSAClick = () => {
    setFSA(true);
    setBloomberg(false);
    setSIG(false);
    setDrexel(false);
  };
  const handleBloombergClick = () => {
    setBloomberg(true);
    setFSA(false);
    setSIG(false);
    setDrexel(false);
  };
  const handleSIGClick = () => {
    setSIG(true);
    setFSA(false);
    setBloomberg(false);
    setDrexel(false);
  };
  const handleDrexelClick = () => {
    setDrexel(true);
    setFSA(false);
    setBloomberg(false);
    setSIG(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      props.setExperienceIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, [props]);

  return (
    <div className="experience_container">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="experience_header"
      >
        <p>EXPERIENCE</p>
        <hr />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
        ref={myRef}
        className="experience_content"
      >
        <div className="company_list">
          <button
            onClick={handleFSAClick}
            className={`experience_btn ${fsa ? "exp_active" : ""}`}
          >
            Fullstack Academy
          </button>
          <button
            onClick={handleBloombergClick}
            className={`experience_btn ${bloomberg ? "exp_active" : ""}`}
          >
            Bloomberg
          </button>
          <button
            onClick={handleSIGClick}
            className={`experience_btn ${sig ? "exp_active" : ""}`}
          >
            Susquehanna Int'l Group
          </button>
          <button
            onClick={handleDrexelClick}
            className={`experience_btn ${drexel ? "exp_active" : ""}`}
          >
            Drexel University
          </button>
        </div>
        {fsa && <FSA />}
        {bloomberg && <Bloomberg />}
        {sig && <SIG />}
        {drexel && <Drexel />}
      </div>
    </div>
  );
};

export default Experience;
