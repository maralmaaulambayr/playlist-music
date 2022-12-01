import { createContext, useState } from "react";
import { Home, MainContent } from "../components";

export const ThemeContext = createContext({  });

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState({
    palette: {
      dark: false,
    },
  });

  const changeDarkTheme = () => {
    setTheme({ ...theme, palette: { dark: !theme.palette.dark } });
  };
  return (
    <ThemeContext.Provider value={{ theme, changeDarkTheme, data: "string" }}>
      <MainContent />
      <Home />
    </ThemeContext.Provider>
  );
};