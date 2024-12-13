import "./Hero.css";
import resume from "../../assets/Ashish CV.pdf"
import profile_img from "../../assets/Profile_img.jpg";
import Typewriter from "react-typewriter-effect";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <>
      <div id="home" className="hero">
        <img src={profile_img} alt="profile" className="profile-image" />
        <h1>
          <span
            style={{
              background:
                "linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I’m Ashish Kumar,
          </span>
          <Typewriter
            startDelay={500}
            cursorColor="white"
            multiText={[
              "Software Engineer",
              "Full Stack Developer",
              "Tech Enthusiast",
              "Competitive Programmer",
              "Software Engineer",
            ]}
            multiTextDelay={1500}
            typeSpeed={100}
            deleteSpeed={50}
            loop={true}
          />
          from India.
        </h1>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink href="#contact" offset="100">
              Connect With Me
            </AnchorLink>
          </div>
          <div className="hero-resume"> <a href={resume}>  My Resume </a></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
