import { useState, useEffect } from "react";
import "styles/layout/ThemeChanger.scss";

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    const list = document.querySelectorAll("li");
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark');
      document.querySelector("select")?.classList.add("dark");
      document.querySelector("header")?.classList.add("dark");
      document.querySelector(".country")?.classList.add("dark");
      document.querySelector("input")?.classList.add("dark");
      document.querySelector(".icon")?.classList.add("dark");
      document.querySelector(".dropdown-header")?.classList.add("dark");
      document.querySelector(".dropdown-container")?.classList.add("dark");

      for(let i = 0; i < list.length; i++) {
        list[i]?.classList.add("dark");
      }

    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark');
      document.querySelector("select")?.classList.remove("dark");
      document.querySelector("header")?.classList.remove("dark");
      document.querySelector(".country")?.classList.remove("dark");
      document.querySelector("input")?.classList.remove("dark");
      document.querySelector(".icon")?.classList.remove("dark");
      document.querySelector(".dropdown-header")?.classList.remove("dark");
      document.querySelector(".dropdown-container")?.classList.remove("dark");

      for(let i = 0; i < list.length; i++) {
        list[i]?.classList.remove("dark");
      }
    }
  }, [themeState]);

  return (
    <>
      <button className="theme__btn" onClick={() => setThemeState(!themeState)}>{themeState ? 'Light Mode' : 'Dark Mode'}</button>
    </>
  );
}

export default ThemeChanger;
