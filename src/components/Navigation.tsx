import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "glass-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between min-h-[56px] sm:min-h-[68px]">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") e.preventDefault(); // Prevents scroll reset if already on home
            }}
            className="flex items-center"
          >
            <img
              src={isScrolled || isOpen || location.pathname === "/" ? "/images/logo.png" : "/images/logo.png"}
              alt="Dystinction Logo"
              className="h-10 w-auto object-contain sm:h-16 transition-all duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link

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

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
