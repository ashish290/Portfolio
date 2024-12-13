import theme_pattern from "../../assets/theme_pattern.svg";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDocker} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb, SiTypescript, SiExpress} from "react-icons/si";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" className="skill">
      <div className="skill-title">
        <h1>Skills & Ability</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="skill-section">
        <div className="first" style={{ width: "500px" }}>
          <div className="about-skill">
          <p className="about-skill-icon">
              <TbBrandCpp />
              C/C++
            </p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
          <p className="about-skill-icon">
              <FaHtml5 />
              HTML
            </p>
            <hr style={{ width: "90%" }} />
          </div>
          <div className="about-skill">
          <p className="about-skill-icon">
              <FaCss3Alt />
              CSS
            </p>
            <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
          <p className="about-skill-icon">
              <FaJsSquare />
              JavaScript
            </p>
            <hr style={{ width: "75%" }} />
          </div>
          <div className="about-skill">
            <p className="about-skill-icon">
              <FaReact />
              ReactJs
            </p>
            <hr style={{ width: "50%" }} />
          </div>
        </div>
        <div className="second" style={{ width: "500px" }}>
          <div className="about-skill">
          <p className="about-skill-icon">
          <FaNodeJs />
              NodeJs
            </p>
            <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
          <p className="about-skill-icon">
              <SiMongodb />
              MongoDB
            </p>
            <hr style={{ width: "70%" }} />
          </div>
          <div className="about-skill">
          <p className="about-skill-icon">
              <FaDocker />
              Devops
            </p>
            <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
          <p className="about-skill-icon">
              <SiTypescript />
              TypeScript
            </p>
            <hr style={{ width: "65%" }} />
          </div>
          <div className="about-skill">
          <p className="about-skill-icon">
              <SiExpress />
              ExpressJS
            </p>
            <hr style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
