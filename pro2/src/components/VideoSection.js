import React, { useState } from "react";
import "../styles/VideoSection.css";

function VideoSection() {
  const [videoSrc] = useState("/videos/sample.mp4");
  const [altText] = useState("Our Story");
  const [title] = useState("Discover Our Journey");
  const [text] = useState("Watch this video to learn more about our mission and values.");

  return (
    <section className="video-sec">
      <video width="100%" height="500" controls style={{ objectFit: "cover" }}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="abs-content">
        <span className="orange-line">{altText}</span>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="btns">
          <a id="book_btn2" href="#home">BOOK A TABLE</a>
          <a href="#home">CONTACT US</a>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;