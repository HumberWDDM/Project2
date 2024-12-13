import React, { useState }from "react";

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
      };

    const submitSubForm = ((event) => {
        event.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {//Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
        }
        
      });

    return (
        <section class="newsletter">
           <div class="news_container">
                <span class="orange-line">Newsletter</span>
                <h3>Subscribe our newsletter</h3>
                <p>Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                <form onSubmit={submitSubForm}>
                    <input type="text" value={email} onChange={handleChange}></input>
                    <button type="submit">SUBSCRIBE</button>
                </form>
           </div>
        </section>
        
    );
}

export default Newsletter;