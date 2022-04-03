import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderBanner from "./components/Header/HeaderBanner";
import Hero from "./components/Hero/Hero";
import AboutContainer from "./components/About/AboutContainer";
import ResumeContainer from "./components/Resume/ResumeContainer";

function App() {
  return (
    <>
      <HeaderBanner />
      <Hero />
      <AboutContainer />
      <ResumeContainer />
    </>
  );
}

export default App;
