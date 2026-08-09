import { motion } from "framer-motion";

function FloatingWindow({
  className,
  delay = 0,
  variant = "blue",
}: {
  className: string;
  delay?: number;
  variant?: "blue" | "violet";
}) {
  const accent = variant === "blue" ? "bg-electric-500" : "bg-violet-500";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`animate-float pointer-events-none absolute hidden rounded-xl border border-white/10 bg-ink-800/70 shadow-2xl shadow-black/40 backdrop-blur-sm lg:block ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
      </div>
      <div className="space-y-2 p-3.5">
        <div className={`h-1.5 w-3/5 rounded-full ${accent} opacity-70`} />
        <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
        <div className="h-1.5 w-2/5 rounded-full bg-white/10" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.55), rgba(168,85,247,0.35), transparent)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 noise-overlay" />

      <FloatingWindow className="left-[4%] top-[26%] w-44 -rotate-6" delay={0.15} variant="blue" />
      <FloatingWindow className="right-[6%] top-[18%] w-52 rotate-3" delay={0.35} variant="violet" />
      <FloatingWindow className="right-[10%] bottom-[12%] w-40 -rotate-3" delay={0.5} variant="blue" />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-mist-300"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-400" />
            </span>
            Now booking Q4 projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance text-5xl font-semibold leading-[1.03] tracking-tightest text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[0.98]"
          >
            Websites that make your{" "}
            <span className="text-gradient bg-[length:200%_auto] animate-gradient-x">
              business
            </span>{" "}
            look better.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-xl text-balance text-lg text-mist-300 sm:text-xl"
          >
            We design and build fast, modern websites that help businesses
            stand out, build trust and turn visitors into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="focus-ring group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10">Start a Project</span>
              <span aria-hidden="true" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#work"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04]"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  );
}
