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
        <img src="/JUAREZ.svg" alt="logo" className="logo" />
        <div className="socials">
          Socials:
          <div className="socialIcons">
            <img src="/twitter.svg" alt="twitter icon" />
            <img src="/overflow.svg" alt="overflow icon" />
            <img src="/github.svg" alt="github icon"  />
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