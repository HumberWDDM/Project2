import React, { useState } from "react";

function Footer() {
  const [aboutText] = useState("We are a leading company in providing the best services for our clients.");
  const [contactInfo] = useState([
    { type: "Phone", detail: "123-456-7890" },
    { type: "Email", detail: "info@example.com" },
    { type: "Address", detail: "123 Main Street, Cityville" }
  ]);
  const [galleryImages] = useState([
    "/images/gallery-i-2.jpg",
    "/images/gallery-i-4.jpg",
    "/images/gallery-i-6.jpg",
    "/images/blog-2.jpg"
  ]);

  return (
    <footer>
      <div className="container">
        <hr />
        <div className="footer__grid">
          <div className="col col1">
            <h5>About us</h5>
            <p>{aboutText}</p>
            <a className="read_more" href="#home">Read More</a>
          </div>
          <div className="col col2">
            <h5>Contact info</h5>
            <ol>
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <b>{info.type}:</b> 
                  <u>{info.detail}</u>
                </li>
              ))}
            </ol>
            <a className="read_more" href="#home">Read More</a>
          </div>
          <div className="col col3">
            <h5>Gallery</h5>
            <div className="images-g">
              {galleryImages.map((image, index) => (
                <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
}
export default Footer;