import Header from "./components/Header";
import Location from "./components/Location";
import BlogIntroPage from "./components/BlogIntroPage";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { PortfolioSection } from "./components/PortfolioSection";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Location />
        <BlogIntroPage />
        <Skills />
        <img src="/portfolio_images/JUAREZ.svg" alt="logo" className="logo" />
        <div className="socials">
          Socials:
          <div className="socialIcons">
            <img src="/portfolio_images/twitter.svg" alt="twitter icon" />
            <a href="https://stackoverflow.com/users/3363002/juarezdev" target="_blank" rel="noopener noreferrer">
              <img src="/portfolio_images/overflow.svg" alt="overflow icon" />
            </a>
            <a href="https://github.com/juarezv90" target="_blank" rel="noopener noreferrer">
              <img src="/portfolio_images/github.svg" alt="github icon" />
            </a>
          </div>
        </div>
        <PortfolioSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
