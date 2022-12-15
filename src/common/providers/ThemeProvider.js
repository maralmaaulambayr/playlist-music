import { createContext, useState } from "react";
import { Home, MainContent } from "../components";
import { Playlist } from "../components/Playlist";

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
    <ThemeContext.Provider value={{children}}>
      <MainContent />
      <Home />
      <Playlist />
    </ThemeContext.Provider>
  );
};