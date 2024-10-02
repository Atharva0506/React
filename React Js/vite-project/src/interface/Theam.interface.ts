import { ReactNode } from "react";

 interface Theme {
    backgroundColor: string;
    color: string;
  }
  

  type ThemeName = "light" | "dark" | "blue";
  

  interface ThemeContextType {
    theme: Theme;
    switchTheme: (themeName: ThemeName) => void;
  }
  interface ThemeProviderProps {
    children: ReactNode;
  }
  export type { Theme, ThemeContextType,ThemeName,ThemeProviderProps };

  