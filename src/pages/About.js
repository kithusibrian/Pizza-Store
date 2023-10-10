import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Welcome to Brian's Pizza Store, where passion for pizza meets
          exceptional taste! Established with the love for crafting the perfect
          pizza, we take pride in serving mouthwatering, handcrafted pizzas that
          delight the senses. At Brian's Pizza Store, our story is as rich and
          flavorful as our pizzas. It all began with Brian's passion for
          bringing people together through the joy of great food. What started
          as a humble kitchen experiment soon transformed into a full-fledged
          pizza haven.
        </p>
      </div>
    </div>
  );
}

export default About;
