import React from "react";
import Frameworks from "./Frameworks";
import Languages from "./Languages";
import StackHeader from "./StackHeader";

const StackContainer = () => {
  return (
    <section id="techstack">
      <StackHeader />
      <Languages />
      <hr />
      <Frameworks />
    </section>
  );
};

export default StackContainer;
