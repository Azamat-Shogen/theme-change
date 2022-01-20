import { ThemeProvider } from "react-switch-theme";

const colors = {
  light: {
    background: "#fff",
    color: "#000"
  },
  dark: {
    background: "#000",
    color: "#fff"
  }
};

const activeMode = "light";
const offlineStorageKey = "react-random-key";

const themeWrapper = (AppComponent) => {
  const newComponent = (props) => {
    return (
      <ThemeProvider
        colors={colors}
        activeMode={activeMode}
        offlineStorageKey={offlineStorageKey}
      >
        <AppComponent {...props} />
      </ThemeProvider>
    );
  };
  return newComponent;
};

export default themeWrapper;
