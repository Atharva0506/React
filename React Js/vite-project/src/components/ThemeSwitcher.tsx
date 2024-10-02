import { useContext } from "react";
import { ThemeContext } from "../context/TheamContext";
import { ThemeName } from "../interface/Theam.interface";
const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return <div>Error: ThemeContext is not available.</div>;
  }

  const {theme,switchTheme} = themeContext;
  const handleThemeChange  = (e:React.ChangeEvent<HTMLSelectElement>) =>{
   switchTheme(e.target.value as ThemeName)
  }
  return <div
  style={{
    backgroundColor: theme.backgroundColor,
    color: theme.color,
  }}
  className="p-6 rounded-lg transition-all"
>
  <p>Current theme applied!</p>
  <label htmlFor="themeSelect" className="block mb-2 font-semibold">
    Choose Theme:
  </label>
  <select
    id="themeSelect"
    onChange={handleThemeChange}
    defaultValue="light"
    className="border rounded-md p-2"
  >
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="blue">Blue</option>
  </select>
</div>;
};

export default ThemeSwitcher;
