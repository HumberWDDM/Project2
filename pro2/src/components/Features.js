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

const GridFeature = ({type}) => {
    const imgSrcs = 
    {
        first: "./images/icon-serv-1-256x256.png",
        second: "./images/icon-serv-2-256x256.png",
        third: "./images/icon-serv-3-256x256.png",
    };

    const h4Msg = 
    {
        first: "Menu for every taste",
        second: "Always fresh ingredients",
        third: "Experienced chefs",
    };

    const pMsg = 
    {
        first: 
        <>
        Dolor sit amet, consectetur adipisicing elit et<br/>molestias possimus
        </>,
        second:
        <>
        Assumenda possimus eaque illo iste, autem.<br/>Porro eveniet autem
        </>,
        third:
        <>
        Rolorem, beatae dolorum, praesentium itaque et<br/>quam quaerat
        </>
    };

    return (
        
        <div class="f f1">
            <img src={imgSrcs[type]} alt=""></img>
            <h4>{h4Msg[type]}</h4>
            <p>{pMsg[type]}</p>
        </div>
    )
}

export default Feature;
export {GridFeature};