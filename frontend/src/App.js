import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Home from "./page/Home";
// import SEPractice from "./pages/SE-Practice";
// import SubmitArticle from "./pages/Submit-Article"; 
// import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Resposiotry (SEPER)</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/SEPractice">Select the Practice</a></li>
          <li><a href="/SubmitArticle">Submit an Article</a></li>
        </ul>
        <div className="content">
          <div></div>
        </div>
      </div>
    </Router>
  );
}

export default App;