import React, { useState } from "react";
import "../styles/IframeVideo.css";

function IframeSection() {
  const [src] = useState("https://www.youtube.com/embed/2lNp1vlOrZI?si=ortrvT0M2HdC6X36");
  const [title] = useState("Virtual Tour");

  return (
    <section className="iframe-section">
        <iframe
          src={src}
          title={title}
          width="100%"
          height="315"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
    </section>
  );
}

export default IframeSection;