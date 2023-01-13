import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";
import StickyHeader from "./StickyHeader";

const Sections = () => {
  const [aboutIsVisible, setAboutIsVisible] = useState(false);
  const [experienceIsVisible, setExperienceIsVisible] = useState(false);
  const [projectsIsVisible, setProjectsIsVisible] = useState(false);
  const [contactIsVisible, setContactIsVisible] = useState(false);

  return (
    <>
      <StickyHeader
        aboutIsVisible={aboutIsVisible}
        experienceIsVisible={experienceIsVisible}
        projectsIsVisible={projectsIsVisible}
        contactIsVisible={contactIsVisible}
      />
      <About
        setAboutIsVisible={setAboutIsVisible}
        setExperienceIsVisible={setExperienceIsVisible}
      />
      <Experience
        setExperienceIsVisible={setExperienceIsVisible}
        setProjectsIsVisible={setProjectsIsVisible}
      />
      <span id="projects"></span>
      <Projects
        setProjectsIsVisible={setProjectsIsVisible}
        setExperienceIsVisible={setExperienceIsVisible}
        setContactIsVisible={setContactIsVisible}
      />
      {/* <Contact /> */}
    </>
  );
};

export default Sections;
