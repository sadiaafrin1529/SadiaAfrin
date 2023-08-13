import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Contacts from "./components/contact/Contacts";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <Projects/>
        <Resume/>
        <Testimonial/>
       {/* <Contact/> */}
       <Contacts/>
       <Footer/>
      </div>
    </div>
  );
}

export default App;
