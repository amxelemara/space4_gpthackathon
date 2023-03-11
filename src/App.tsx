import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import logo from "./logo.svg";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1 className="App-title">Welcome to {config.app.TITLE}</h1> */}

        <Intro />
      </header>

    </div>
  );
}

const Intro: React.FC = () => {
  return (
    <p className="App-intro">
      Untitled Hackathon Project
    </p>
  );
};

