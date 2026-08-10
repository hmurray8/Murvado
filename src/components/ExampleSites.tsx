import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import ScaledFrame from "./examples/ScaledFrame";
import LocalTradieSite from "./examples/sites/LocalTradieSite";
import PremiumProfessionalSite from "./examples/sites/PremiumProfessionalSite";
import EditorialCreativeSite from "./examples/sites/EditorialCreativeSite";
import ImageFirstSite from "./examples/sites/ImageFirstSite";
import BentoGridSite from "./examples/sites/BentoGridSite";
import SaasStartupSite from "./examples/sites/SaasStartupSite";

const EXAMPLES = [
  {
    n: "01",
    label: "Local Business / Tradie",
    url: "brisbaneplumbing.com.au",
    Site: LocalTradieSite,
  },
  {
    n: "02",
    label: "Premium / Professional",
    url: "harrisonlegal.com.au",
    Site: PremiumProfessionalSite,
  },
  {
    n: "03",
    label: "Editorial / Creative",
    url: "harvestkitchen.com.au",
    Site: EditorialCreativeSite,
  },
  {
    n: "04",
    label: "Image-First / Full Screen",
    url: "wildearthlandscapes.com.au",
    Site: ImageFirstSite,
  },
  {
    n: "05",
    label: "Modern / Bento Grid",
    url: "elevatebuilding.com.au",
    Site: BentoGridSite,
  },
  {
    n: "06",
    label: "SaaS / Startup",
    url: "getflowly.io",
    Site: SaasStartupSite,
  },
];

export default function ExampleSites() {
  const [active, setActive] = useState(0);
  const current = EXAMPLES[active];

  return (
    <section id="examples" className="relative py-28 sm:py-36">
      <div className="container-page">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-400">
            Explore the Possibilities
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Every business, its own website.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-balance text-mist-400">
            Click through six different design directions to see the kind of
            website we could design and build for you.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {EXAMPLES.map((ex, i) => (
            <button
              key={ex.n}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`focus-ring flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "border-white/20 bg-white/[0.08] text-white"
                  : "border-white/10 bg-white/[0.02] text-mist-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <span
                className={`font-mono text-xs ${
                  active === i
                    ? "bg-grad-brand bg-clip-text text-transparent"
                    : "text-mist-400/70"
                }`}
              >
                {ex.n}
              </span>
              <span className="hidden sm:inline">{ex.label}</span>
              <span className="sm:hidden">{ex.label.split(" / ")[0]}</span>
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto max-w-5xl">
          <div
            className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-grad-brand opacity-[0.15] blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.n}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ScaledFrame url={current.url} canvasWidth={1280} canvasHeight={900}>
                  <current.Site />
                </ScaledFrame>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-mist-400">
            See a style you like?{" "}
            <a
              href="#contact"
              className="focus-ring rounded-sm font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
            >
              Let's build yours →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
