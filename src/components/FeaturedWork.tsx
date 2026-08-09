import Reveal from "./Reveal";
import BrowserFrame from "./work/BrowserFrame";

const PROJECTS = [
  {
    n: "01",
    category: "Trade / Home Services",
    title: "Holzie Air-conditioning",
    desc: "A local air-conditioning and refrigeration business turned into a trustworthy, lead-generating website for the Capricorn Coast.",
    tags: ["Web Design", "Local SEO", "Lead Generation"],
    url: "holzieaircon.com",
    href: "https://holzieaircon.com",
    image: "/work/holzie.webp",
  },
  {
    n: "02",
    category: "Property / Real Estate",
    title: "Lush Acres",
    desc: "A premium acreage development marketed with a cinematic, map-driven site built to convert interest into waitlist sign-ups.",
    tags: ["Web Design", "Development", "Waitlist"],
    url: "lushacres.com.au",
    href: "https://lushacres.com.au",
    image: "/work/lushacres.webp",
  },
  {
    n: "03",
    category: "Technology / Sports SaaS",
    title: "FootyCasual",
    desc: "An NRL fantasy companion app — live rankings, trade planning and player insights delivered in a fast, data-dense dashboard.",
    tags: ["Web App", "React", "Product Design"],
    url: "footycasual.com",
    href: "https://footycasual.com",
    image: "/work/footycasual.webp",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="container-page">
        <Reveal className="mb-14 flex flex-col items-start justify-between gap-6 sm:mb-20 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-electric-400">
              Selected Work
            </span>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Built to stand out.
            </h2>
          </div>
          <p className="max-w-sm text-balance text-mist-400">
            A sample of real websites and products we've designed and
            built — live, in production, for real businesses.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.n} delay={i * 0.08} y={28}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group relative block rounded-2xl"
              >
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl bg-grad-brand opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
                  aria-hidden="true"
                />
                <article className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-3 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-white/20 sm:p-4">
                  <div className="overflow-hidden rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                    <BrowserFrame
                      url={project.url}
                      image={project.image}
                      alt={`${project.title} website homepage`}
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4 px-2 pb-2 pt-5 sm:px-3">
                    <div>
                      <div className="flex items-center gap-2.5 text-xs text-mist-400">
                        <span className="font-mono">{project.n}</span>
                        <span className="h-1 w-1 rounded-full bg-mist-400/50" />
                        <span>{project.category}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-grad-brand">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-mist-400">
                        {project.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-mist-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-white/25 group-hover:text-white"
                    >
                      ↗
                    </span>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
