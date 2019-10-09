import React from "react";
import Home from "./Home";
import Bourbons from "./Bourbons";

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Bourbons") return <Bourbons />;
  return <div>Not Found :(</div>;
};

const App = ({ pageName }) => {
  return <div>{pageToShow(pageName)}</div>;
};

export default App;
