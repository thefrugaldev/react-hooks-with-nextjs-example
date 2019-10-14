import React from "react";
import Home from "./Home";
import Whiskeys from "./Whiskeys";

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Whiskeys") return <Whiskeys />;
  return <div>Not Found :(</div>;
};

const App = ({ pageName }) => {
  return <div>{pageToShow(pageName)}</div>;
};

export default App;
