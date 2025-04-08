"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2 pl-4">
            <span className="font-bold">Home</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              )}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/projects"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/projects"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/contact"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/projects"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/projects"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.projects}
            </Link>
            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/contact"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
