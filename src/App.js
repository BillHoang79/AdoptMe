import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "cat",
      breed: "black"
    }),
    React.createElement(Pet, {
      name: "Chicken",
      animal: "cat",
      breed: "black"
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "cat",
      breed: "black"
    })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
