import React from "react";

import Hero from "./components/hero/Hero";
import Contact from "./pages/Contact";
import Makeup from "./pages/Makeup";
import Lashes from "./pages/Lashes";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Makeup />
      <Lashes />
      <Contact />
    </div>
  );
}

export default App;
