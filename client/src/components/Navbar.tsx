import { Link } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border neon-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-2xl font-bold text-primary animate-glow-pulse">
              ⚡
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">
              NEON LUA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <span className="text-foreground hover:text-primary transition-colors duration-300">
              {t("nav.home")}
            </span>
          </Link>
          <Link href="/features">
            <span className="text-foreground hover:text-primary transition-colors duration-300">
              {t("nav.features")}
            </span>
          </Link>
          <Link href="/wiki">
            <span className="text-foreground hover:text-primary transition-colors duration-300">
              {t("nav.wiki")}
            </span>
          </Link>
          <Link href="/donate">
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 font-semibold">
              {t("nav.donate")}
            </span>
          </Link>

          {/* Language Selector */}
          <div className="flex items-center gap-2 border-l border-border pl-8">
            <Globe size={18} className="text-primary" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-background border border-border rounded px-2 py-1 text-foreground text-sm cursor-pointer hover:border-primary transition-colors"
            >
              <option value="pt-BR">Português</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary hover:text-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border neon-border">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/">
              <span className="block text-foreground hover:text-primary transition-colors">
                {t("nav.home")}
              </span>
            </Link>
            <Link href="/features">
              <span className="block text-foreground hover:text-primary transition-colors">
                {t("nav.features")}
              </span>
            </Link>
            <Link href="/wiki">
              <span className="block text-foreground hover:text-primary transition-colors">
                {t("nav.wiki")}
              </span>
            </Link>
            <Link href="/donate">
              <span className="block px-4 py-2 bg-accent text-accent-foreground rounded text-center font-semibold">
                {t("nav.donate")}
              </span>
            </Link>
            <div className="border-t border-border pt-4">
              <label className="flex items-center gap-2 text-sm">
                <Globe size={16} className="text-primary" />
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                  className="bg-background border border-border rounded px-2 py-1 text-foreground text-sm cursor-pointer hover:border-primary transition-colors"
                >
                  <option value="pt-BR">Português</option>
                  <option value="en">English</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
