import React, { useState } from "react";

import Header from "./components/Header";

import "./App.css";

import backgroundImage from "./assets/background.jpeg";

const App = () => {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  function handleAddProject() {
    // projects.push([`New Project ${Date.now()}`]);
    setProjects([...projects, `New Project ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <img src={backgroundImage} alt="" />

      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projetos
      </button>
    </>
  );
};

export default App;
