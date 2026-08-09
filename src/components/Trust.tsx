import Reveal from "./Reveal";

const PILLARS = [
  {
    n: "01",
    title: "Design",
    desc: "Interfaces crafted around your brand, your customers and how they think.",
  },
  {
    n: "02",
    title: "Development",
    desc: "Solid engineering underneath — fast, responsive, built to last.",
  },
  {
    n: "03",
    title: "Performance",
    desc: "Every page tuned to load instantly and convert visitors into customers.",
  },
];

export default function Trust() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-400">
              The Reason
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Your website is often the{" "}
              <span className="text-mist-400">first impression</span> of your
              business.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex items-center lg:col-span-5">
            <p className="text-balance text-lg leading-relaxed text-mist-300">
              Murvado Digital combines design, development and performance to
              create websites that don't just look great — they work
              exceptionally well, for you and for the people who visit them.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.1}
              className="group relative bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-900 sm:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(220px circle at 20% 0%, rgba(139,92,246,0.12), transparent 70%)",
                }}
              />
              <span className="font-mono text-sm text-mist-400/70">{p.n}</span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
