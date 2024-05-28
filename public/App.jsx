import Header from "./components/Header";
import Location from "./components/Location";
import BlogIntroPage from "./components/BlogIntroPage";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Location />
        <BlogIntroPage />
        <Skills />
        <img src="/JUAREZ.svg" alt="logo" className="logo" />
        <div className="socials test">
          Socials:
          <div className="socialIcons">
            <img src="/twitter.svg" alt="twitter icon" />
            <img src="/overflow.svg" alt="overflow icon" />
            <img src="/github.svg" alt="github icon"  />
          </div>
        </div>
        <div className="portfolio_panel test"><h3>Portfolio</h3></div>
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
