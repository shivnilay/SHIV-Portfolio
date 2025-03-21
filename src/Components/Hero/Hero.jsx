import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span> SHIV NILAY SHUKLA </span>React Developer Based In India
      </h1>
      <p>
        Passionate Frontend Developer with 11+ years of experience, including 2
        years of expertise in React.js. Skilled in React.js, Next.js, Redux,
        Redux Toolkit, Thunk, Saga, Hooks, JavaScript (ES6+), TypeScript,
        Tailwind CSS, HTML5, CSS3, and Bootstrap 4
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
