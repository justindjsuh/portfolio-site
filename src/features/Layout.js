import Footer from "./Footer";
import Header from "./Header";
import Landing from "./Landing";
import Sections from "./Sections";

const Layout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main_container">
          <Landing />
        </div>
      </div>
      <span id="about"></span>
      <Sections />
      <Footer />
    </>
  );
};

export default Layout;
