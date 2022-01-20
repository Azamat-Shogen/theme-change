import React, { useContext } from "react";
import { Theme } from "react-switch-theme";
import "./styles.css";
import themeWrapper from "./ThemeWrapper";

function App(props) {
  const [theme, toogleTheme] = useContext(Theme);

  console.log(props);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>Theme: {theme}</h1>
      <button onClick={() => toogleTheme()} type="button">
        change
      </button>
    </div>
  );
}

export default themeWrapper(App);
