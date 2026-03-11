"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/#preis", label: "Preis" },
  { href: "/blog", label: "Blog" },
];

export default function BlogHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/blog") return pathname.startsWith("/blog");
    return false;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-350 items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={36} animate={false} />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-base font-medium transition-colors hover:text-fg ${
                isActive(link.href) ? "text-fg" : "text-fg-muted"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/#kontakt"
            className="relative overflow-hidden rounded-full bg-fg px-7 py-3 text-base font-medium text-bg transition-transform hover:scale-105"
          >
            Gespräch buchen
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menü"
        >
          <motion.span
            animate={
              menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
            }
            className="h-[1.5px] w-6 bg-fg"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-[1.5px] w-6 bg-fg"
          />
          <motion.span
            animate={
              menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
            }
            className="h-[1.5px] w-6 bg-fg"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-bg md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg transition-colors hover:text-fg ${
                      isActive(link.href) ? "text-fg" : "text-fg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/#kontakt"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-fg px-6 py-3 text-center text-[15px] font-medium text-bg"
              >
                Gespräch buchen
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
