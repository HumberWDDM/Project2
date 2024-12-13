import React, { useState } from "react";
import "../styles/NewsLetter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [backgroundImg] = useState("/images/reservation-bg.jpg");
  const [title] = useState("Stay Updated");
  const [subtitle] = useState("Join our Newsletter");
  const [text] = useState("Subscribe to receive the latest news and updates.");

 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email.trim() === "") {
      alert("Please enter an email address.");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };
  
  return (
    <section
      className="newsletter"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="news_container">
        <span className="orange-line">{title}</span>
        <h3>{subtitle}</h3>
        <p>{text}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
