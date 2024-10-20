import React from "react";

import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "Something" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("id"));
// root.render(heading);

// React.createElement (Objects) => HTML (Browser understanding)

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
[React.createElement("h1", { }, "I am an H1 tag"),
    React.createElement("h2", { }, "I am an H2 tag")
]
  ),React.createElement(
    "div",
    { id: "child2" },
[React.createElement("h1", { }, "I am an H1 tag"),
    React.createElement("h2", { }, "I am an H2 tag")
]
  )]
);
root.render(parent);
