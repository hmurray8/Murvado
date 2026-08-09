import { motion } from "framer-motion";
import Reveal from "./Reveal";

function PerformanceViz() {
  return (
    <div className="flex h-full items-end gap-1.5">
      {[35, 60, 45, 85, 65].map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="w-2.5 rounded-t-sm bg-gradient-to-t from-electric-500/70 to-electric-400"
        />
      ))}
    </div>
  );
}

function ResponsiveViz() {
  return (
    <div className="flex h-full items-end gap-2.5">
      <span className="h-6 w-4 rounded-[2px] border border-violet-400/60" />
      <span className="h-8 w-7 rounded-[2px] border border-violet-400/60" />
      <span className="h-10 w-14 rounded-[2px] border border-violet-400/60" />
    </div>
  );
}

function SeoViz() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <span className="h-7 w-7 rounded-full border-2 border-electric-400/70" />
      <span className="absolute h-2.5 w-px translate-x-2.5 translate-y-2.5 rotate-45 bg-electric-400/70" />
    </div>
  );
}

function CodeViz() {
  return (
    <div className="flex h-full flex-col justify-center gap-1.5">
      <span className="h-1 w-10 rounded-full bg-violet-400/70" />
      <span className="h-1 w-14 rounded-full bg-white/20" />
      <span className="h-1 w-8 rounded-full bg-white/20" />
    </div>
  );
}

const ITEMS = [
  {
    n: "01",
    title: "Performance",
    desc: "Fast websites that feel instant.",
    Viz: PerformanceViz,
  },
  {
    n: "02",
    title: "Responsive",
    desc: "Designed to look great on every screen.",
    Viz: ResponsiveViz,
  },
  {
    n: "03",
    title: "SEO-ready",
    desc: "Built with search engines in mind.",
    Viz: SeoViz,
  },
  {
    n: "04",
    title: "Built properly",
    desc: "Clean, scalable and maintainable code.",
    Viz: CodeViz,
  },
];

export default function WhyMurvado() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-400">
              Why Murvado
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl">
              Good design gets attention.
              <br />
              <span className="text-mist-400">Good development keeps it.</span>
            </h2>
            <p className="mt-6 max-w-md text-balance leading-relaxed text-mist-400">
              A great-looking site that's slow or broken on mobile costs you
              customers. We make sure both halves are right.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {ITEMS.map(({ n, title, desc, Viz }, i) => (
                <Reveal key={n} delay={i * 0.08}>
                  <div className="group flex items-center gap-6 py-7 transition-colors duration-300 sm:gap-10">
                    <span className="hidden font-mono text-sm text-mist-400/60 sm:block">
                      {n}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-mist-400">{desc}</p>
                    </div>
                    <div className="h-10 w-16 shrink-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:w-20">
                      <Viz />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
