import React from "react";

const Reservation = () => {
    return (
        <section class="video-sec">
            <video loop autoPlay muted >
                <source src="/images/movie.mp4" type="video/mp4" width="100%" heigh="500px"/>
                Your browser does not support the video tag.
            </video>
            <div class="abs-content">
                <span class="orange-line">Reservation</span>
                <h3 class="common_h3">Working hours</h3>
                <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                <div class="btns">
                    <a id="book_btn2"href="#home">BOOK A TABLE</a>
                    <a href="#home">CONTACT US</a>
                </div>
            </div>
        </section>
        
    );
}

export default Reservation;