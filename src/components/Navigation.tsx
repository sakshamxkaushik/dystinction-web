import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import LogoDark from "@/assets/svg/logo_dark.svg";
import LogoLight from "@/assets/svg/logo_light.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains("light")) setTheme("light");
      else setTheme("dark");
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    // Set initial theme
    if (document.body.classList.contains("light")) setTheme("light");
    else setTheme("dark");
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Approach", href: "/approach" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-screen z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "glass-card backdrop-blur-md"
          : "bg-background backdrop-blur-md"
      }`}
    >
      <div className="w-full px-3 sm:px-6">
        <div className="flex items-center justify-between min-h-[56px] sm:min-h-[68px]">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") e.preventDefault();
            }}
            className="flex items-center"
          >
            <img
              src={theme === "light" ? LogoLight : LogoDark}
              alt="Dystinction"
              className="h-10 w-auto ml-4 sm:ml-6" // Added margin-left
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="liquid" size="sm" asChild>
              <Link to="/book-consultation">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Meet
              </Link>
            </Button>
          </div>

          {/* Theme Switcher - desktop only */}
          <div className="hidden md:flex items-center space-x-2 ml-2">
            <ThemeSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ color: theme === "light" ? "#1a1a1a" : "#fff" }}
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-glass-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="liquid" size="sm" className="mt-4" asChild>
                <Link to="/book-consultation" onClick={() => setIsOpen(false)}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Meet
                </Link>
              </Button>
              {/* Theme Switcher in mobile menu */}
              <div className="flex items-center justify-start mt-2">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
