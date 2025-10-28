import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const t = localStorage.getItem('theme');
      if (t) return t;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    if (theme === 'dark') document.body.classList.add('soft-dark');
    else document.body.classList.remove('soft-dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}
