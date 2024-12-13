import "./Footer.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { VscDebugContinue } from "react-icons/vsc";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h1>Ashish’s Portfolio</h1>
          <div
            className="footer-about-para"
            style={{ padding: "10px 0 10px 0" }}
          >
            <p>
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
            <p>
              Please wait for a while all major projects will be listed soon,
              till then keep visiting.{" "}
            </p>
            <p
              style={{
                background:
                  "linear-gradient(267deg, #da7c25 0.36%, #b923e1 102.06%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "600"
              }}
            >
              Connect with me!
            </p>
          </div>
        </div>
        <div className="footer-quickLink">
          <h1>Quick Links</h1>
          <div className="footer-link">
          <AnchorLink href="#home" offset="100">
            <div className="link">
              <VscDebugContinue />
              <a href=""> Home</a>
            </div>
            </AnchorLink>
            <AnchorLink href="#about-me" offset="100">
            <div className="link">
              <VscDebugContinue />
              <a href=""> About Me</a>
            </div>
            </AnchorLink>
            <AnchorLink href="#skills" offset="100">
            <div className="link">
              <VscDebugContinue />
              <a href=""> Skills</a>
            </div>
            </AnchorLink>
            <AnchorLink href="#project" offset="100">
            <div className="link">
              <VscDebugContinue />
              <a href=""> Project</a>
            </div>
            </AnchorLink>
            <AnchorLink href="#contact" offset="100">
            <div className="link">
              <VscDebugContinue />
              <a href=""> Contact</a>
            </div>
            </AnchorLink>
          </div>
        </div>
        <div className="footer-contactInfo">
          <h1>Contact Info</h1>
          <div className="mail" style={{ display: "flex", gap: "10px" }}>
            <img
              src={mail_icon}
              alt="mail icon"
              style={{ width: "24px", height: "24px", padding: "10px 0 0 0" }}
            />
            <p>iamashish228@gmail.com</p>
          </div>
          <div
            className="location"
            style={{ display: "flex", gap: "10px", padding: "10px 0 0 0" }}
          >
            <img
              src={location_icon}
              alt="location icon"
              style={{ width: "24px", height: "24px" }}
            />
            <p>Patna, Bihar</p>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", margin: "10px 0 0 0" }} />
      <div className="footer-bottom">
        <p>
          Design With ❤️ By <span>Ashish Kumar</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
