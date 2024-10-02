import { useContext } from "react";
import { Product } from "./components/Product";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeContext } from "./context/TheamContext";

function App() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;
  return (
 
      <div
        className={`h-full w-full bg-[${theme.backgroundColor}] text-[${theme.color}] backdrop-blur-lg`}   >
        <ThemeSwitcher />
        <Product />
      </div>
 
  );
}

export default App;
