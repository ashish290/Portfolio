import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_me.jpg";

function About() {
  return (
    <>
      <div id="about-me" className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="pattern" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profile_img} alt="profile img" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <h3 style={{ fontSize: "6vh" }}>
                Hi!{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  I’m Ashish,
                </span>
              </h3>
              <p >
                As a Full Stack Developer, I excel in building and maintaining
                dynamic web applications by seamlessly integrating both
                front-end and back-end technologies. I am proficient in creating
                responsive, user-friendly interfaces using HTML, CSS,
                JavaScript, and frameworks like React, while also ensuring
                robust server-side functionality with Node.js, Express, and
                databases such as MongoDB or SQL.
              </p>
              <div className="info">
                <p>
                  <span>College :</span> Dr. M.G.R. Educational And Research
                  Institute
                </p>

                <p>
                  <span>Email : </span> iamashish228@gmail.com
                </p>
                <p>
                  <span>Mob :</span> +91 6203382195
                </p>
                <p>
                  <span>Place :</span> Patna, Bihar
                </p>
              </div>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ashish-kumar-569980227/">
                <FaLinkedin className="icon linkedin" size={50} />
              </a>
              <a href="https://github.com/ashish290">
                <FaGithub className="icon github" size={50} />
              </a>
              <a href="https://www.instagram.com/ashish_kashyap_228/">
                <FaInstagram className="icon instagram" size={50} />
              </a>
              <a href="https://x.com/Ashish_5028">
                <FaTwitter className="icon twitter" size={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
