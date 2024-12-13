import theme_pattern from "../../assets/theme_pattern.svg";
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import Project3 from "../../assets/Project3.png";
import arrow_icon from "../../assets/arrow_icon.svg";
import "./Project.css";

function Project() {
  return (
    <div id="project" className="project">
      <div className="project-ref">
        <div className="project-title">
          <h1>Projects</h1>
          <img src={theme_pattern} alt="pattern" />
        </div>
      </div>
      <div className="project-section">
        <div className="project-cards">
          <div className="box">
            <div className="first-sec">
              <a href="https://grace-store.netlify.app/" className="project-1">
                <img src={Project1} alt="Project 1" className="image" />
              </a>
              <a
                href="https://stackoverflow-ap.netlify.app/signin"
                className="project-2"
              >
                <img src={Project2} alt="Project 2" className="image" />
              </a>
            </div>
            <div className="second-sec">
              <a
                href="https://exquisite-semifreddo-384031.netlify.app/"
                className="project-3"
              >
                <img src={Project3} alt="Project 3" className="image" />
              </a>
              <div className="show-more">
                <a href="https://github.com/ashish290?tab=repositories">
                  <p>Show More</p>
                  <img src={arrow_icon} alt="Arrow Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
