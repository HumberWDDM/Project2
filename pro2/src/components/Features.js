import React from "react";

const Feature = () => {
    return (
        <section class="features">
        <div class="fea_container">
            <span class="features_span">Features</span>
            <h3>Why people choose us?</h3>
            <p>Porro eveniet, autem ipsam vitae consequatur!</p>
        </div>
        </section>
    );
}

const GridFeature = () => {
    return (
        <div class="features__grid">
        <div class="f f1">
            <img src="./images/icon-serv-1-256x256.png" alt=""></img>
            <h4>Menu for every taste</h4>
            <p>Dolor sit amet, consectetur adipisicing elit et<br></br>molestias possimus</p>
        </div>
        </div>
    )
}

export default Feature;
export {GridFeature};