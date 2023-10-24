import Lottie from "lottie-react";
import boyWorking from "./assets/boy-working-on-laptop-lottie-animation.json";
import Meet from './components/Meet/Meet'
import Carousel from './components/Carousel/Carousel'
import Overview from './components/Overview/Overview'
import Test from './components/Test/Test'
import WorkWithUs from './components/WorkWithUs/WorkWithUs'
import './App.css'

function App() {
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <Lottie
            style={{ width: "120px", height: "120px", marginLeft: "45px" }}
            animationData={boyWorking}
          />
        </div>
        <ul className="list">
          <li>
            <a href="#hero" onClick={(event) => scrollToSection("hero", event)}>
              Emotions
            </a>
          </li>
          <li>
            <a
              href="#manifesto"
              onClick={(event) => scrollToSection("manifesto", event)}
            >
              Manifesto
            </a>
          </li>
          <li>
            <a
              href="#aware"
              onClick={(event) => scrollToSection("aware", event)}
            >
              Self-awareness test
            </a>
          </li>
          <li>
            <a
              href="#workwithus"
              onClick={(event) => scrollToSection("workwithus", event)}
            >
              Work With Us
            </a>
          </li>
        </ul>
        <div className="right">
          <button className="downloadBtn">
            <span className="buttonText">Download app</span>
          </button>
        </div>
      </nav>
      <div className="sections">
        <section id="overview" className="section">
          <Overview />
        </section>
        <section id="carousel" className="section">
          <Carousel />
        </section>
        <section id="meet" className="section">
          <Meet />
        </section>
        <section id="test" className="section">
          <Test />
        </section>
        <section id="workwithus" className="section">
          <WorkWithUs />
        </section>
      </div>
    </>
  );
}

export default App;