
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SidebarExtras(){
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div style={{position:"absolute", bottom:20, left:18, right:18, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      <div style={{display:"flex", alignItems:"center", gap:8}}>
        <label style={{display:"flex", alignItems:"center", gap:8}}>
          <input aria-label="Toggle theme" type="checkbox" onChange={toggle} checked={theme==="dark"} />
          <span style={{fontSize:12, color:"var(--sidebar-text)"}}>{theme==="dark" ? "Dark" : "Light"}</span>
        </label>
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  );
}
