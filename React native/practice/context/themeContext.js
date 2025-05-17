const { createContext, useState } = require("react");

export const ThemeContext = createContext();

// Theme -> light, dark

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
