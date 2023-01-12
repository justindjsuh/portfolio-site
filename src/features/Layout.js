import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";
import Loading from "./Loading";
import Sections from "./Sections";

const Layout = () => {
  return (
    <>
      <Loading />
      <div className="container">
        <Header />
        <div className="main_container">
          <Landing />
        </div>
        <div className="scroll_div">
          <a href="#about">
            <svg className="circle" xmlns="http://www.w3.org/2000/svg">
              <g>
                <ellipse
                  className="background"
                  ry="60"
                  rx="60"
                  cy="62.5"
                  cx="62.5"
                  strokeWidth="1"
                />
                <ellipse
                  className="foreground"
                  ry="60"
                  rx="60"
                  cy="62.5"
                  cx="62.5"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <span id="about"></span>
      <Sections />
      <span id="contact"></span>
      <Footer />
    </>
  );
};

export default Layout;
