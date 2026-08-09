import Logo from "./Logo";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08]">
      <div className="container-page flex flex-col items-center gap-8 py-14 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" onClick={handleClick("#top")} className="focus-ring rounded-md">
          <Logo />
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClick(link.href)}
                className="focus-ring text-sm text-mist-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-mist-400/70">© 2026 Murvado Digital</p>
      </div>
    </footer>
  );
}
