import Reveal from "./Reveal";

function DesignIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9" aria-hidden="true">
      <rect x="6" y="6" width="20" height="20" rx="4" stroke="url(#g1)" strokeWidth="1.6" />
      <rect x="16" y="16" width="18" height="18" rx="4" fill="#0b0d12" stroke="url(#g1)" strokeWidth="1.6" />
      <circle cx="25" cy="25" r="3" fill="url(#g1)" />
      <defs>
        <linearGradient id="g1" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5b9dfd" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DevIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9" aria-hidden="true">
      <path d="M13 12 L6 20 L13 28" stroke="url(#g2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 12 L34 20 L27 28" stroke="url(#g2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 9 L18 31" stroke="url(#g2)" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <defs>
        <linearGradient id="g2" x1="6" y1="9" x2="34" y2="31" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5b9dfd" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CommerceIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9" aria-hidden="true">
      <path d="M7 10h4l3 17h16" stroke="url(#g3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 15h20l-2.5 11h-15.5" stroke="url(#g3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="32" r="2.2" fill="url(#g3)" />
      <circle cx="28" cy="32" r="2.2" fill="url(#g3)" />
      <defs>
        <linearGradient id="g3" x1="7" y1="10" x2="34" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5b9dfd" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9" aria-hidden="true">
      <path
        d="M20 7a13 13 0 1 1-9.2 22.2"
        stroke="url(#g4)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M6 24l2 6 6-1.5" stroke="url(#g4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="4" fill="url(#g4)" opacity="0.85" />
      <defs>
        <linearGradient id="g4" x1="6" y1="7" x2="33" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5b9dfd" />
          <stop offset="1" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const SERVICES = [
  {
    Icon: DesignIcon,
    title: "Web Design",
    desc: "Beautiful interfaces designed around your brand and customers.",
  },
  {
    Icon: DevIcon,
    title: "Web Development",
    desc: "Fast, responsive and technically solid websites built from the ground up.",
  },
  {
    Icon: CommerceIcon,
    title: "E-commerce",
    desc: "Online stores designed to make buying simple.",
  },
  {
    Icon: SupportIcon,
    title: "Ongoing Support",
    desc: "Hosting, updates, improvements and ongoing website management.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="container-page">
        <Reveal className="mb-16 max-w-2xl sm:mb-20">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-400">
            Services
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Everything your website needs.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className="group relative bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-900"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-transform duration-500 group-hover:scale-110 group-hover:border-white/20">
                <Icon />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist-400">
                {desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
