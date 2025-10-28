
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggle: ()=>{}
});

export default function ThemeProvider({ children }){
  const [theme, setTheme] = useState(localStorage.getItem("app-theme") || "light");
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  },[theme]);
  const toggle = () => setTheme(t=> t === "light" ? "dark" : "light");
  return (
    <ThemeContext.Provider value={{theme, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
}
