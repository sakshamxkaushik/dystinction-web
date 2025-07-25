import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // On mount, read the theme from localStorage or use light as default
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    let initialTheme: Theme = "light";
    if (savedTheme === "dark") {
      initialTheme = savedTheme;
    }
    // Always default to light theme if no saved preference or system is dark
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