/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Nikita Struk",
  title: "Game Developer & Software Engineer",
  email: "nikita.struk.softdev@gmail.com",
  gitHub: "https://github.com/CyberspyUA",
  instagram: "https://www.instagram.com/nikita_struk_/",
  linkedIn: "https://www.linkedin.com/in/nikita-struk-game-developer/",
  medium: "",
  twitter: "",
  youTube: "https://www.youtube.com/channel/UCfH92NuZyHnm7WcpcrxAKJg",
};

const primaryColor = "#000000";
const secondaryColor = "#000000";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
