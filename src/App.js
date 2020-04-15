import React from "react";

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header title="Prop 1">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Prop 2">
        <ul>
          <li>menu 1</li>
          <li>menu 2</li>
          <li>menu 3</li>
        </ul>
      </Header>
    </>
  );
};

export default App;
