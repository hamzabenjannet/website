import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  StarsCanvas,
  Technologies,
} from "./components";

import { BrowserRouter } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter
      {...{
        id: `browserRouter`,
      }}
    >
      <div
        {...{
          id: `divComponentsContainer`,
          className: "relative z-0 bg-primary bg-hero-pattern bg-cover",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
