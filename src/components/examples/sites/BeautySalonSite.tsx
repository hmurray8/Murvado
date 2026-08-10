import { CalendarIcon, PaletteIcon, ScissorsIcon, SparkleIcon, StarIcon } from "../icons";

const SERVICES = [
  { Icon: ScissorsIcon, title: "Cut & Finish", price: "$65" },
  { Icon: PaletteIcon, title: "Colour", price: "$120" },
  { Icon: SparkleIcon, title: "Balayage", price: "$180" },
  { Icon: CalendarIcon, title: "Treatment", price: "$45" },
];

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

export default function BeautySalonSite() {
  return (
    <div className="flex h-full w-full flex-col bg-[#fdf8f6] font-sans text-[#2b2320]">
      <header className="flex flex-none items-center justify-between border-b border-black/[0.05] px-10 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c96a7c] text-white">
            <ScissorsIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-[14px] font-semibold tracking-[0.08em]">WILLOW &amp; CO.</span>
        </div>
        <nav className="flex items-center gap-7 text-[12px] text-[#2b2320]/60">
          <span className="text-[#2b2320]">Home</span>
          <span>Services</span>
          <span>Stylists</span>
          <span>Gallery</span>
        </nav>
        <span className="rounded-full bg-[#c96a7c] px-4 py-2 text-[12px] font-semibold text-white">
          Book Now
        </span>
      </header>

      <div className="grid flex-1 grid-cols-2 gap-10 px-10 py-10">
        <div className="flex h-full flex-col justify-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c96a7c]">
            BOUTIQUE HAIR STUDIO
          </span>
          <h1 className="mt-4 text-[46px] font-semibold leading-[1.06] tracking-tight">
            Hair, done
            <br />
            beautifully.
          </h1>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#2b2320]/55">
            Colour, cut &amp; style in the heart of Fortitude Valley.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="rounded-full bg-[#c96a7c] px-6 py-3 text-[13px] font-semibold text-white">
              Book Now
            </span>
            <span className="rounded-full border border-[#2b2320]/15 px-6 py-3 text-[13px] font-semibold text-[#2b2320]">
              View Services
            </span>
          </div>
        </div>

        <div className="relative h-full w-full">
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <img
              src="/examples/beauty-salon/hero.jpg"
              alt="Calming salon ambience with candles and fresh flowers"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 w-[220px] rounded-xl border border-black/[0.06] bg-white p-3.5 shadow-[0_20px_40px_-15px_rgba(43,35,32,0.35)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#2b2320]/50">
                <CalendarIcon className="h-3 w-3" />
                NEXT AVAILABLE
              </div>
            </div>
            <div className="mt-1.5 text-[13px] font-bold text-[#2b2320]">Today, 2:30 PM</div>
            <div className="mt-2.5 flex gap-1">
              {DAYS.map((d, i) => (
                <span
                  key={i}
                  className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-semibold ${
                    i === 2 ? "bg-[#c96a7c] text-white" : "bg-[#f3e7e6] text-[#2b2320]/50"
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-black/[0.06] pt-2.5">
              <span className="flex -space-x-1.5">
                <span className="h-4 w-4 rounded-full border border-white bg-gradient-to-br from-[#c96a7c] to-[#e8b4bc]" />
                <span className="h-4 w-4 rounded-full border border-white bg-gradient-to-br from-[#e8b4bc] to-[#c96a7c]" />
                <span className="h-4 w-4 rounded-full border border-white bg-gradient-to-br from-[#c96a7c] to-[#8a4a58]" />
              </span>
              <span className="text-[9px] font-medium text-[#2b2320]/45">3 stylists free</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-none border-y border-black/[0.05] bg-white px-10 py-6">
        <div className="grid grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3e7e6] text-[#c96a7c]">
                <s.Icon className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[12px] font-semibold text-[#2b2320]">{s.title}</div>
                <div className="text-[11px] text-[#2b2320]/45">from {s.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-none items-center justify-between bg-[#c96a7c] px-10 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex gap-0.5 text-white">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled className="h-3.5 w-3.5" />
            ))}
          </span>
          <span className="text-[12px] font-medium text-white/85">
            5.0 rated · Ready for a fresh look?
          </span>
        </div>
        <span className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-[#c96a7c]">
          Book Now
        </span>
      </div>
    </div>
  );
}
