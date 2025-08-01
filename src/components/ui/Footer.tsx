import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import LogoLight from "@/assets/svg/footer_logo_light.svg";
import LogoDark from "@/assets/svg/footer_logo_dark.svg";
import {  Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const useTheme = (): "light" | "dark" => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    // Initial check
    updateTheme();

    // Optional: Watch for manual toggles if you're not using a global context
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return theme;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
    const theme = useTheme();
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Approach", href: "/approach" },
    { name: "Book Consultation", href: "/book-consultation" },
  ];

  const serviceLinks = [
    { name: "Enterprise Software", href: "/services/enterprise-software" },
    { name: "Data Engineering", href: "/services/data-engineering" },
    { name: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
    { name: "AI Solutions", href: "/services/ai-solutions" },
  ];

  return (
    <footer className="w-full bg-background border-t border-glass py-12 ">
      <div className="container mx-auto px-6">
        {/* Top section with logo and links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="h-16 flex items-center">
              
          <img
  src={theme === "dark" ? LogoLight : LogoDark}

  alt="Dystinction"
  className="h-10 w-auto ml-4 sm:ml-6"
/>
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise solutions built for scale, security, and performance.
            </p>
            {/* Social links */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.linkedin.com/company/dystinction/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/DystinctionTech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:hello@dystinction.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Main navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>RUSA, Panjab University</p>
              <p>Sector 25, Chandigarh, India 160036</p>
              <p className="mt-2">hello@dystinction.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
            <Link to="/book-consultation" className="inline-flex items-center text-sm text-primary hover:underline mt-2">
              Book a consultation
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom section with copyright and legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Dystinction Technologies. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
