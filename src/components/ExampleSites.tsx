import { useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import ScaledFrame from "./examples/ScaledFrame";
import LocalTradieSite from "./examples/sites/LocalTradieSite";
import PremiumProfessionalSite from "./examples/sites/PremiumProfessionalSite";
import EditorialCreativeSite from "./examples/sites/EditorialCreativeSite";
import ImageFirstSite from "./examples/sites/ImageFirstSite";
import BentoGridSite from "./examples/sites/BentoGridSite";
import SaasStartupSite from "./examples/sites/SaasStartupSite";
import BeautySalonSite from "./examples/sites/BeautySalonSite";

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
  {
    n: "07",
    label: "Booking-First / Salon",
    url: "willowandco.com.au",
    Site: BeautySalonSite,
  },
];

const CANVAS_W = 1280;
const CANVAS_H = 900;

function TileThumbnail({ Site }: { Site: () => JSX.Element }) {
  const canvasStyle = {
    width: CANVAS_W,
    height: CANVAS_H,
    "--canvas-w": `${CANVAS_W}px`,
  } as CSSProperties;

  return (
    <div
      className="site-scale-frame relative w-full overflow-hidden"
      style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
    >
      <div
        className="site-scale-canvas pointer-events-none absolute left-0 top-0 origin-top-left"
        style={canvasStyle}
      >
        <Site />
      </div>
    </div>
  );
}

export default function ExampleSites() {
  const [active, setActive] = useState(0);
  const current = EXAMPLES[active];
  const previewRef = useRef<HTMLDivElement>(null);

  const selectExample = (i: number) => {
    setActive(i);
    previewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
            Click any preview below to see the kind of website we could
            design and build for you.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mb-10 grid grid-cols-2 gap-3 sm:mb-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
        >
          {EXAMPLES.map((ex, i) => (
            <button
              key={ex.n}
              type="button"
              onClick={() => selectExample(i)}
              aria-pressed={active === i}
              aria-label={`Preview ${ex.label} example`}
              className={`focus-ring group relative flex flex-col overflow-hidden rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 ${
                active === i
                  ? "border-white/25 bg-white/[0.04] shadow-[0_8px_24px_-8px_rgba(168,85,247,0.45)]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute -inset-px rounded-xl bg-grad-brand blur-lg transition-opacity duration-500 ${
                  active === i ? "opacity-20" : "opacity-0 group-hover:opacity-25"
                }`}
              />
              <div className="relative overflow-hidden rounded-t-[calc(0.75rem-1px)] border-b border-white/10 bg-ink-900">
                <TileThumbnail Site={ex.Site} />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 transition-all duration-300 group-hover:bg-ink-950/55 group-hover:opacity-100">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink-950/80 text-white backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M9 3H3v6" />
                      <path d="M21 9V3h-6" />
                      <path d="M3 15v6h6" />
                      <path d="M15 21h6v-6" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="relative flex items-center gap-2 px-3 py-2.5">
                <span className="font-mono text-[10px] text-mist-400/70">{ex.n}</span>
                <span
                  className={`truncate text-xs font-medium transition-colors duration-300 ${
                    active === i ? "text-white" : "text-mist-300 group-hover:text-white"
                  }`}
                >
                  {ex.label}
                </span>
                {active === i && (
                  <span
                    aria-hidden="true"
                    className="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-grad-brand text-[9px] font-bold text-white"
                  >
                    ✓
                  </span>
                )}
              </div>
            </button>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto max-w-5xl">
          <div ref={previewRef} className="scroll-mt-24" />
          <p className="mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-mist-400/80">
            <span className="font-mono text-electric-400">{current.n}</span>
            Now previewing — {current.label}
          </p>
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
                <ScaledFrame url={current.url} canvasWidth={CANVAS_W} canvasHeight={CANVAS_H}>
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
