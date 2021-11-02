import { useState, useEffect } from "react";
import "styles/layout/ThemeChanger.scss"

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark');
    }
  }, [themeState]);

  return (
    <>
      <button className="theme__btn" onClick={() => setThemeState(!themeState)}>{themeState ? 'Light Mode' : 'Dark Mode'}</button>
    </>
  );
}

export default ThemeChanger;
