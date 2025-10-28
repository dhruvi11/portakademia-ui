
import React from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" }
];

export default function LanguageSwitcher(){
  const current = localStorage.getItem("app-lang") || "en";
  const [lang, setLang] = React.useState(current);
  React.useEffect(()=> {
    // If i18next is present, try to change language
    if (typeof window !== "undefined" && window.i18next && window.i18next.changeLanguage){
      window.i18next.changeLanguage(lang);
    }
    localStorage.setItem("app-lang", lang);
  }, [lang]);
  return (
    <select aria-label="Select language" value={lang} onChange={e=>setLang(e.target.value)} style={{padding:8, borderRadius:8}}>
      {languages.map(l=> <option key={l.code} value={l.code}>{l.label}</option>)}
    </select>
  );
}
