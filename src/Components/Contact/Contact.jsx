import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "353b6f82-2760-4bdb-827e-ec2dca484963");

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
    <div>
      <div id="contact" className="contact">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Lets talk</h1>
            <p>
              Im currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can
              contact anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>greatstackdev@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>772-825-524</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>CA, United States</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" placeholder="Enter your message" rows="8"></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
