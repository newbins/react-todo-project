import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import TodoContainer from "./functionBased/components/TodoContainer";

//stylesheet
import "./functionBased/App.css";

ReactDom.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
