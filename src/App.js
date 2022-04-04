import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderContainer from "./components/Header/HeaderContainer";
import Hero from "./components/Hero/Hero";
import AboutContainer from "./components/About/AboutContainer";
import ResumeContainer from "./components/Resume/ResumeContainer";
import StackContainer from "./components/TechStack/StackContainer";

function App() {
  return (
    <>
      <HeaderContainer />
      <Hero />
      <AboutContainer />
      <ResumeContainer />
      <StackContainer />
    </>
  );
}

export default App;
