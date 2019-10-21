import React from "react";
import Home from "./Home";
import Whiskeys from "./Whiskeys";

export const ConfigContext = React.createContext(); //Creates context for the entire App

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Whiskeys") return <Whiskeys />;
  return <div>Not Found :(</div>;
};

const configValue = {
  showSignMeUp: true,
  showBourbonType: true
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

export default App;
