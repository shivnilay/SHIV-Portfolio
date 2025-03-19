import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import  mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "28128cd3-69f3-4fe3-890f-c4d42fc42df2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let,s talk</h1>
          <p>
            I am available for a discussion at your convenience and would love
            the opportunity to collaborate. Let’s schedule a quick meeting to
            align on your project goals
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>shivnilay@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+918874193888</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Lucknow India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name " name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter Your Name " name="name" />
          <label htmlFor="">Write Your Message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter  Your Message"
          ></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact
