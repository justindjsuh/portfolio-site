import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
import About from './About';
import StickyHeader from './StickyHeader';

const Layout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main_container">
          <Landing />
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Layout;
