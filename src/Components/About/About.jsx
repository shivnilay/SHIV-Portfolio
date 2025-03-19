import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate Frontend Developer | Skilled in React.js, Next.js,
              Redux, Redux Toolkit, Thunk, Saga, Hooks, JavaScript (ES6+),
              TypeScript, Tailwind CSS, HTML5, CSS3, and Bootstrap 4.
            </p>
            <p></p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Exp</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>12+</h1>
          <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Years of Exp</p>
        </div>
        <hr />
      </div>
      <div className="about-achievement"></div>
    </div>
  );
};

export default About;
