import "./Footer.css";
import logo from "../../assets/logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Passionate Frontend Developer with 11+ years of experience,
            including 2 years of expertise in React.js. Skilled in React.js,
            Next.js, Redux, Redux Toolkit, Thunk, Saga, Hooks, JavaScript
            (ES6+), TypeScript, Tailwind CSS, HTML5, CSS3, and Bootstrap 4
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2025 Shiv Nilay Shukla | React.js Developer | Frontend Engineer |
          India
        </p>
        <div className="footer-bottom-right">
          <p>Term Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
