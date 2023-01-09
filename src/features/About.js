import { useRef, useEffect, useState } from 'react';
import StickyHeader from './StickyHeader';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <>
      <StickyHeader isVisible={isVisible} />
      <div className="about_container" id="about">
        <div className="about_header">
          <p>ABOUT</p>
          <hr />
        </div>
        <div ref={myRef} className="about_content">
          <img />
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
        <div>
          <p>Soft Skills</p>
          <div>
            {/* <img />
          <img />
          <img />
          <img /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
