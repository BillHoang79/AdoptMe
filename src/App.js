import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Cat" breed="Mixed" />
      <Pet name="Pepper" animal="Dog" breed="Havanese" />
      <Pet name="Goldy" animal="Fish" breed="Goldfish" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
