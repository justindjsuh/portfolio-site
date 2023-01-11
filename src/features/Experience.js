import { useRef, useEffect } from "react";

const Experience = (props) => {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      props.setExperienceIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, [props]);

  return (
    <div className="experience_container">
      <div className="experience_header">
        <p>EXPERIENCE</p>
        <hr />
      </div>
      <div ref={myRef} className="experience_content">
        <div className="company_list">
          <button className="experience_btn">Fullstack Academy</button>
          <button className="experience_btn">Bloomberg</button>
          <button className="experience_btn">Susquehanna Int'l Group</button>
          <button className="experience_btn">Drexel University</button>
        </div>
        <div className="company_desc bloomberg">
          <p className="company_header">Bloomberg | Data Engineer Co-op</p>
          <div className="work_desc">
            <p>
              • Migrated a manual process on JIRA to be completely automated,
              achieving a 95% reduction in employee time spent and deprecating
              the previous inefficient workflow
            </p>
            <p>
              • Created documentation for a new team that contained the
              fundamentals of acquisition and data analysis
            </p>
            <p>
              • Developed, maintained, and quality checked crawlers to obtain
              and analyze data for distribution that is displayed on the
              Bloomberg Terminal, a software that works as a flexible platform
              that provides real-time data, new, and analytics for financial
              professionals
            </p>
          </div>
          <div className="technology_stack">
            <p>Python</p>
            <p>Jenkins</p>
            <p>BBOT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
