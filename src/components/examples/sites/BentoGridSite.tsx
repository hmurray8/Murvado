import { HammerIcon, HomeIcon, PlusSquareIcon, SproutIcon, StarIcon } from "../icons";

const NAV_ITEMS = [
  { Icon: HomeIcon, title: "Custom Homes", desc: "Designed around you" },
  { Icon: HammerIcon, title: "Renovations", desc: "Add value to your home" },
  { Icon: PlusSquareIcon, title: "Extensions", desc: "More space, more life" },
  { Icon: SproutIcon, title: "Outdoor Living", desc: "Beautiful outdoor spaces" },
];

export default function BentoGridSite() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f2ece3] font-sans text-[#1c1917]">
      <header className="flex flex-none items-center justify-between border-b border-black/[0.06] bg-[#141210] px-10 py-4">
        <div className="flex items-center gap-2">
          <span className="text-[#c2703d]">
            <HomeIcon className="h-4 w-4" />
          </span>
          <span className="text-[13px] font-semibold tracking-wide text-white">
            ELEVATE <span className="font-normal text-white/50">BUILDING</span>
          </span>
        </div>
        <nav className="flex items-center gap-7 text-[12px] text-white/65">
          <span className="text-white">Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Projects</span>
        </nav>
        <span className="rounded-sm bg-white px-4 py-2 text-[11.5px] font-semibold text-[#1c1917]">
          Get in Touch
        </span>
      </header>

      <div
        className="grid flex-1 gap-3 p-5"
        style={{
          gridTemplateColumns: "1.3fr 1fr 1.15fr",
          gridTemplateRows: "1fr 1fr 0.85fr",
          gridTemplateAreas: `"headline stat1 image1" "headline stat2 image1" "rating image2 full"`,
        }}
      >
        <div
          style={{ gridArea: "headline" }}
          className="flex flex-col justify-center rounded-xl bg-[#1c1917] p-6"
        >
          <h1 className="text-[24px] font-semibold leading-[1.15] text-white">
            Building better spaces for better living.
          </h1>
          <p className="mt-3 max-w-[220px] text-[11.5px] leading-relaxed text-white/55">
            From custom homes to renovations, we deliver quality craftsmanship and exceptional
            service.
          </p>
          <span className="mt-4 w-fit rounded-sm bg-[#c2703d] px-4 py-2 text-[11px] font-semibold text-white">
            View Our Projects
          </span>
        </div>

        <div style={{ gridArea: "stat1" }} className="flex flex-col justify-center rounded-xl bg-white px-5">
          <div className="text-[26px] font-bold text-[#1c1917]">15+</div>
          <div className="text-[9.5px] font-medium tracking-wide text-[#1c1917]/45">
            YEARS OF EXPERIENCE
          </div>
        </div>

        <div style={{ gridArea: "stat2" }} className="flex flex-col justify-center rounded-xl bg-[#c2703d]/15 px-5">
          <div className="text-[26px] font-bold text-[#c2703d]">250+</div>
          <div className="text-[9.5px] font-medium tracking-wide text-[#1c1917]/45">
            PROJECTS COMPLETED
          </div>
        </div>

        <div
          style={{ gridArea: "image1" }}
          className="rounded-xl bg-gradient-to-br from-[#8a7460] to-[#463a2d]"
        />

        <div style={{ gridArea: "rating" }} className="flex flex-col justify-center gap-1.5 rounded-xl bg-white px-5">
          <div className="flex items-center gap-1.5">
            <span className="text-[15px] font-bold text-[#1c1917]">5.0</span>
            <span className="flex gap-0.5 text-[#c2703d]">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled className="h-2.5 w-2.5" />
              ))}
            </span>
          </div>
          <div className="text-[9px] font-medium tracking-wide text-[#1c1917]/45">
            GOOGLE RATING · 80+ REVIEWS
          </div>
        </div>

        <div
          style={{ gridArea: "image2" }}
          className="rounded-xl bg-gradient-to-br from-[#d9c9b4] to-[#a5906f]"
        />

        <div style={{ gridArea: "full" }} className="flex flex-col justify-center rounded-xl bg-white px-5">
          <div className="text-[11.5px] font-semibold text-[#1c1917]">
            Full Service Design to Build
          </div>
          <div className="mt-1 text-[10px] leading-snug text-[#1c1917]/45">
            We handle every step of the process.
          </div>
        </div>
      </div>

      <div className="flex-none border-t border-black/[0.06] bg-[#f2ece3] px-10 py-5">
        <div className="grid grid-cols-4 gap-6">
          {NAV_ITEMS.map((n) => (
            <div key={n.title} className="flex items-center gap-2.5">
              <span className="text-[#c2703d]">
                <n.Icon className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[11.5px] font-semibold text-[#1c1917]">{n.title}</div>
                <div className="text-[9.5px] text-[#1c1917]/45">{n.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
