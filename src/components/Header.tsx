import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Resume", path: "/about" },
  { label: "Projects", path: "/work" },
  { label: "Contact", path: "/contact" },
];

interface HeaderProps { revealMode?: boolean; }

export function Header({ revealMode = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(!revealMode);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!revealMode) { setIsVisible(true); return; }
    const handleMouseMove = (e: MouseEvent) => setIsVisible(e.clientY < 100);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [revealMode]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-separator/60 bg-background/70 backdrop-blur-md transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
      <div className="container-wide">
        <div className="flex h-20 items-center justify-between md:h-20">
          <Link to="/" className="font-display text-xl tracking-tight text-foreground hover:text-accent transition-colors">
            Frederick <span className="text-accent">/</span> 黄瑞鹏
          </Link>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`text-mono text-[0.7rem] uppercase transition-colors hover:text-accent ${location.pathname === item.path ? "text-accent" : "text-muted-foreground"}`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center md:flex">
            <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-accent transition-colors" aria-label="Toggle theme">
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-accent transition-colors" aria-label="Toggle theme">
              {mounted && (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
            <button className="p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-background md:hidden animate-fade-in">
          <nav className="container-wide flex flex-col gap-8 py-12">
            {navItems.map((item, index) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className="font-display text-5xl text-foreground hover:text-accent animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
