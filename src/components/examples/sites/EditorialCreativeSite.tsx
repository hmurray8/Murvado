import { CalendarIcon, LeafIcon, MapPinIcon, UsersIcon } from "../icons";

const FEATURES = [
  { Icon: LeafIcon, title: "Fresh Ingredients", desc: "Sourced locally" },
  { Icon: CalendarIcon, title: "Daily Menus", desc: "Inspired by season" },
  { Icon: UsersIcon, title: "Private Dining", desc: "Events & functions" },
  { Icon: MapPinIcon, title: "Find Us", desc: "Newstead, Brisbane" },
];

const PLATES = [
  "from-[#8a5a3a] to-[#3c2416]",
  "from-[#6f3f2e] to-[#2a1710]",
  "from-[#9c6a3f] to-[#4a2c15]",
  "from-[#5c3826] to-[#211008]",
];

export default function EditorialCreativeSite() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f6f1e9] font-serif text-[#241c14]">
      <div className="relative flex flex-[1.3] flex-col overflow-hidden bg-gradient-to-br from-[#3a2416] via-[#20140b] to-[#0d0805] text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "radial-gradient(60% 55% at 50% 45%, rgba(201,161,90,0.16), transparent 70%)" }}
        />
        <header className="relative z-10 flex flex-none items-center justify-between px-10 pt-5 text-left">
          <span className="text-[14px] font-semibold tracking-[0.15em] text-[#f6ead6]">
            HARVEST KITCHEN
          </span>
          <nav className="flex items-center gap-7 font-sans text-[11.5px] tracking-wide text-white/75">
            <span className="text-white">Menu</span>
            <span>Our Story</span>
            <span>Reservations</span>
            <span>Contact</span>
          </nav>
        </header>
        <div className="relative z-10 flex flex-1 items-center justify-center px-10">
          <div>
            <h1 className="text-[38px] font-medium leading-[1.12] text-[#f6ead6]">
              Seasonal food.
              <br />
              Honest flavours.
            </h1>
            <p className="mx-auto mt-4 max-w-xs font-sans text-[12px] leading-relaxed text-white/55">
              Modern Australian cuisine with a focus on local produce.
            </p>
            <span className="mt-6 inline-block border border-[#c9a15a] px-6 py-2.5 font-sans text-[11px] font-semibold tracking-[0.1em] text-[#e8c98a]">
              BOOK A TABLE
            </span>
          </div>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-[1fr_1.4fr] gap-6 px-10 py-7">
        <div className="flex flex-col justify-center">
          <span className="font-sans text-[9px] font-semibold tracking-[0.2em] text-[#8a6a3a]">
            OUR STORY
          </span>
          <p className="mt-2 font-sans text-[11.5px] leading-relaxed text-[#241c14]/65">
            Harvest Kitchen is a neighbourhood restaurant inspired by the best of Queensland's
            growers and producers.
          </p>
          <span className="mt-2.5 font-sans text-[11px] font-semibold text-[#8a6a3a]">
            Read our story →
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2.5">
          {PLATES.map((g, i) => (
            <div key={i} className={`rounded-md bg-gradient-to-br ${g}`} />
          ))}
        </div>
      </div>

      <div className="flex-none bg-[#20140b] px-10 py-5">
        <div className="grid grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-center gap-2.5">
              <span className="text-[#c9a15a]">
                <f.Icon className="h-4 w-4" />
              </span>
              <div className="font-sans leading-tight">
                <div className="text-[11px] font-semibold text-[#f6ead6]">{f.title}</div>
                <div className="text-[9.5px] text-white/40">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
