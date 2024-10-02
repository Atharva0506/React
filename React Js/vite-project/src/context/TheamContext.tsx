import { createContext, useState } from "react";
import {
  Theme,
  ThemeContextType,
  ThemeName,
  ThemeProviderProps,
} from "../interface/Theam.interface";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const themes: { [key in ThemeName]: Theme } = {
    light: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    dark: {
      backgroundColor: "#000000",
      color: "#ffffff",
    },
    blue: {
      backgroundColor: "#87CEEB",
      color: "#ffffff",
    },
  };
  const [theme, setTheme] = useState<Theme>(themes.light);

  const switchTheme = (themeName: ThemeName) => {
    setTheme(themes[themeName]);
  };

  const value = {
    theme,
    switchTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
