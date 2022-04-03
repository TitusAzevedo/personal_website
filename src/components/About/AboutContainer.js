import React from "react";
import AboutHeader from "./AboutHeader";
import AboutProfile from "./AboutProfile";

const AboutContainer = () => {
  return (
    <section id="about" className="about">
      <div>
        <AboutHeader />
        <AboutProfile />
      </div>
    </section>
  );
};

export default AboutContainer;
