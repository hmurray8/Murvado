import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "Understand your business, audience and goals.",
    detail:
      "We start with a working session to understand what you do, who you serve, and what success looks like — so every decision after this has a reason behind it.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Create the visual direction and user experience.",
    detail:
      "We shape the visual direction, structure and flow of your site, iterating with you until it looks and feels exactly right.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Turn the design into a fast, responsive website.",
    detail:
      "The approved design becomes a real, production-grade website — built clean, fast and responsive from the ground up.",
  },
  {
    n: "04",
    title: "Launch",
    desc: "Test, optimise and launch your new website.",
    detail:
      "We test across devices and browsers, tune performance and SEO fundamentals, then launch it into the world.",
  },
  {
    n: "05",
    title: "Grow",
    desc: "Continue improving your website as your business grows.",
    detail:
      "Your website should evolve with your business. We stay on to support, maintain and improve it over time.",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="container-page">
        <Reveal className="mb-16 max-w-2xl sm:mb-24">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-400">
            Process
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            From idea to launch.
          </h2>
        </Reveal>

        {/* Desktop interactive timeline */}
        <Reveal className="hidden lg:block">
          <div className="relative flex justify-between">
            <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />
            <motion.div
              className="absolute left-0 top-5 h-px bg-gradient-to-r from-electric-400 to-violet-400"
              animate={{ width: `${(active / (STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
            {STEPS.map((step, i) => (
              <button
                key={step.n}
                onClick={() => setActive(i)}
                className="focus-ring group relative z-10 flex flex-col items-center gap-4 rounded-lg px-2"
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border font-mono text-sm transition-all duration-300 ${
                    i === active
                      ? "border-transparent bg-grad-brand text-white shadow-glow"
                      : i < active
                        ? "border-white/25 bg-ink-800 text-white/70"
                        : "border-white/10 bg-ink-950 text-mist-400 group-hover:border-white/25"
                  }`}
                >
                  {step.n}
                </span>
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    i === active ? "text-white" : "text-mist-400 group-hover:text-white"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>

          <div className="relative mt-12 min-h-[120px] rounded-2xl border border-white/10 bg-white/[0.02] p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
              >
                <span className="font-mono text-xs text-electric-400">
                  {STEPS[active].n} / {STEPS.length}
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {STEPS[active].title}
                </h3>
                <p className="mt-3 text-balance leading-relaxed text-mist-300">
                  {STEPS[active].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Mobile / tablet vertical timeline */}
        <div className="relative space-y-10 lg:hidden">
          <div className="absolute bottom-0 left-5 top-2 w-px bg-white/10" />
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06} className="relative flex gap-5 pl-0">
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-900 font-mono text-sm text-mist-300">
                {step.n}
              </span>
              <div className="pt-1.5">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mist-400">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
