import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const stories = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walek",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://facebook.github.io/redux/",
    author: "Dan Abramaocx",
    num_comments: 23,
    points: 7,
    objectID: 1
  }
];

ReactDOM.render(<App stories={stories} />, document.getElementById("root"));

serviceWorker.unregister();
