import React from "react";
import "../styles/Features.css";

const Feature = () => {
    const features = [
        {
            imgSrc: "./images/icon-serv-1-256x256.png",
            h4Msg: "Menu for every taste",
            pMsg: (
                <>
                    Dolor sit amet, consectetur adipisicing elit et
                    <br />
                    molestias possimus
                </>
            ),
        },
        {
            imgSrc: "./images/icon-serv-2-256x256.png",
            h4Msg: "Always fresh ingredients",
            pMsg: (
                <>
                    Assumenda possimus eaque illo iste, autem.
                    <br />
                    Porro eveniet autem
                </>
            ),
        },
        {
            imgSrc: "./images/icon-serv-3-256x256.png",
            h4Msg: "Experienced chefs",
            pMsg: (
                <>
                    Rolorem, beatae dolorum, praesentium itaque et
                    <br />
                    quam quaerat
                </>
            ),
        },
    ];

    return (
        <section className="features">
            <div className="fea_container">
                <span className="features_span">Features</span>
                <h3>Why people choose us?</h3>
                <p>Porro eveniet, autem ipsam vitae consequatur!</p>
            </div>

            <div className="grid-features">
                {features.map((feature, index) => (
                    <div key={index} className={`f f${index + 1}`}>
                        <img src={feature.imgSrc} alt={feature.h4Msg} />
                        <h4>{feature.h4Msg}</h4>
                        <p>{feature.pMsg}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Feature;