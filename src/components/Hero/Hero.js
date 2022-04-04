import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import TypeAnimation from "react-type-animation";

const Bounce = styled.div`animation 2s ${keyframes`${bounce}`}`;
//const Hinge = styled.div`animation 2s ${keyframes`${hinge}`}`;

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div>
        <h1>Titus Azevedo</h1>
        <TypeAnimation
          cursor={true}
          sequence={[
            "I'm a Developer",
            2000,
            "I'm an Engineer",
            2000,
            "I'm a gigachad",
            2000,
            "",
          ]}
          wrapper="h2"
          repeat={69}
        />
      </div>
    </section>
  );
};

export default Hero;
