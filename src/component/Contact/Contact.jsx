import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import locaion_icon from "../../assets/location_icon.svg";
import './Contact.css';

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "43126194-b210-465f-966e-bd47cc82bb4d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let’s talk</h1>
          <p>I’m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="icon-details">
            <p className="mail-icon"><img src={mail_icon} alt="" /> iamashish228@gmai.com</p>
            <p className="call-icon"><img src={call_icon} alt="" /> +91 6203382195</p>
            <p className="location-icon"><img src={locaion_icon} alt=""/> Patna, Bihar</p>
          </div>
        </div>
        <div onSubmit={onSubmit} className="contact-right">
          <form style={{color: 'rgb(10, 25, 47)'}}>
            <input type="hidden" name="subject" value="New Submission from Portfolio" />
            
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
            
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            
            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
