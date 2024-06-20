import Header from "./components/Header";
import BlogIntroPage from "./components/BlogIntroPage";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { PortfolioSection } from "./components/PortfolioSection";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>

        <Banner />
        {/* <BlogIntroPage /> */}
        <Skills />
        <PortfolioSection />
        <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
