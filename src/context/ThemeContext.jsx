import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("frizpay-theme") || "frizpay"; // dark by default
  });

  useEffect(() => {
    // DaisyUI uses data-theme on <html> tag
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("frizpay-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "frizpay" ? "frizpay_light" : "frizpay"));

  const isDark = theme === "frizpay";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);