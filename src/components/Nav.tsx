import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Examples", href: "#examples" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-lg border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 sm:h-[72px] items-center justify-between">
        <a
          href="#top"
          onClick={handleNavClick("#top")}
          className="focus-ring rounded-md"
          aria-label="Murvado Digital home"
        >
          <Logo />
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="focus-ring group relative text-sm font-medium text-mist-300 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-electric-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={handleNavClick("#contact")}
          className="focus-ring hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-electric-400/50 hover:bg-white/[0.06]"
        >
          Start a Project
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-white transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-5 bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-5 bg-white transition-all duration-300 ${
                open ? "bottom-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-white/[0.06] bg-ink-950/95 backdrop-blur-lg md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className="focus-ring block rounded-md px-2 py-3 text-base font-medium text-mist-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={handleNavClick("#contact")}
                  className="focus-ring flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink-950"
                >
                  Start a Project →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
