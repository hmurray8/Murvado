import { HammerIcon, LeafIcon, ShieldIcon } from "../icons";

const FEATURES = [
  { Icon: LeafIcon, title: "Custom Landscapes", desc: "Designed for your lifestyle" },
  { Icon: HammerIcon, title: "Quality Construction", desc: "Built to last" },
  { Icon: ShieldIcon, title: "Local & Reliable", desc: "Proudly Queensland owned" },
];

export default function ImageFirstSite() {
  return (
    <div className="flex h-full w-full flex-col font-sans">
      <div className="relative flex flex-1 flex-col overflow-hidden bg-[#0e1811]">
        <img
          src="https://picsum.photos/seed/wild-earth-landscapes/1600/1000"
          alt="Snow-capped mountain range framed by pine trees"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050a07] via-[#0e1811]/55 to-[#0e1811]/25" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(35% 45% at 75% 30%, rgba(216,165,90,0.16), transparent 70%), radial-gradient(50% 60% at 20% 80%, rgba(60,120,80,0.25), transparent 70%)",
          }}
        />
        <header className="relative z-10 flex flex-none items-center justify-between px-10 pt-6">
          <div className="flex items-center gap-2">
            <LeafIcon className="h-4 w-4 text-[#d8c9a0]" />
            <span className="text-[13px] font-semibold tracking-[0.12em] text-white">
              WILD EARTH
              <span className="ml-1 font-normal text-white/50">LANDSCAPES</span>
            </span>
          </div>
          <nav className="flex items-center gap-7 text-[11.5px] text-white/70">
            <span>About</span>
            <span>Services</span>
            <span>Projects</span>
            <span className="rounded-sm border border-white/25 px-3 py-1.5 text-white">Contact</span>
          </nav>
        </header>

        <div className="relative z-10 flex flex-1 flex-col justify-end px-10 pb-8">
          <h1 className="max-w-md text-[36px] font-semibold leading-[1.08] text-white">
            Beautiful outdoor spaces made for living.
          </h1>
          <p className="mt-3 max-w-xs text-[12.5px] leading-relaxed text-white/55">
            Landscape design and construction across South East Queensland.
          </p>
          <span className="mt-5 w-fit rounded-sm border border-white/30 px-5 py-2.5 text-[12px] font-semibold text-white">
            View Our Work
          </span>
        </div>
      </div>

      <div className="flex-none bg-[#0b140e] px-10 py-5">
        <div className="grid grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-center gap-2.5">
              <span className="text-[#8fae7c]">
                <f.Icon className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <div className="text-[11.5px] font-semibold text-white">{f.title}</div>
                <div className="text-[9.5px] text-white/40">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
