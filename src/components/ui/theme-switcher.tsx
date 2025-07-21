import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // On mount, read the theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    let initialTheme: Theme = "dark";
    if (savedTheme === "light" || savedTheme === "dark") {
      initialTheme = savedTheme;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initialTheme = prefersDark ? "dark" : "light";
    }
    setTheme(initialTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
} 