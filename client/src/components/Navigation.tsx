import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "./ui/logo";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg border-b border-white/20" 
          : "glass border-b border-white/20"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
            <div className="w-10 h-10">
              <Logo />
            </div>
            <div className="text-xl font-bold text-navy font-display">
              CLOUDRAGE<br />
              <span className="text-sm font-normal">TECHNOLOGY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-medium transition-colors duration-200 ${
                  location === href
                    ? "text-cyan"
                    : "text-navy hover:text-cyan"
                }`}
                data-testid={`link-${label.toLowerCase()}`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange to-orange/80 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              data-testid="button-contact"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-cyan"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg border-t border-white/20">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2 text-navy hover:text-cyan transition-colors"
                onClick={() => setIsMenuOpen(false)}
                data-testid={`mobile-link-${label.toLowerCase()}`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2 text-navy hover:text-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
              data-testid="mobile-link-contact"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
