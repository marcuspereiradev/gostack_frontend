import React, { useState, useEffect } from "react";
import api from "./services/api";

import Header from "./components/Header";

import "./App.css";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
      console.log(response);
    });
  }, []);

  async function handleAddProject() {
    // projects.push([`New Project ${Date.now()}`]);
    // setProjects([...projects, `New Project ${Date.now()}`]);
    const response = await api.post("projects", {
      title: `New Project ${Date.now()}`,
      owner: "Marcus Pereira",
    });

    console.log(response.data);

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project, index) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projetos
      </button>
    </>
  );
};

export default App;
