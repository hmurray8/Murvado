import {
  ClockIcon,
  DropletIcon,
  HomeIcon,
  PhoneIcon,
  ShieldIcon,
  TagIcon,
  WaveIcon,
  WrenchIcon,
} from "../icons";

const BADGES = [
  { Icon: ClockIcon, label: "24/7 Emergency Service" },
  { Icon: TagIcon, label: "Upfront Pricing" },
  { Icon: ShieldIcon, label: "Licensed & Insured" },
  { Icon: ShieldIcon, label: "100% Satisfaction Guarantee" },
];

const SERVICES = [
  { Icon: WrenchIcon, title: "General Plumbing", desc: "Leaking taps, toilets, pipes and more." },
  { Icon: DropletIcon, title: "Hot Water Systems", desc: "Installation, repairs and replacements." },
  { Icon: WaveIcon, title: "Blocked Drains", desc: "Clearing drains fast and effectively." },
  { Icon: HomeIcon, title: "Bathroom Renovations", desc: "Quality renovations done right." },
];

export default function LocalTradieSite() {
  return (
    <div className="flex h-full w-full flex-col bg-white font-sans">
      <header className="flex flex-none items-center justify-between border-b border-white/5 bg-[#0b1220] px-10 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2f6fed] text-white">
            <DropletIcon className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <div className="text-[13px] font-bold tracking-wide text-white">BRISBANE</div>
            <div className="-mt-0.5 text-[9px] tracking-[0.2em] text-white/50">PLUMBING CO.</div>
          </div>
        </div>
        <nav className="flex items-center gap-7 text-[12.5px] font-medium text-white/70">
          <span className="text-white">Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Reviews</span>
        </nav>
        <span className="rounded-md bg-[#2f6fed] px-4 py-2 text-[12.5px] font-semibold text-white">
          Get a Quote
        </span>
      </header>

      <div className="relative flex flex-1 items-center overflow-hidden bg-[#0b1220] px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(50% 70% at 78% 50%, rgba(47,111,237,0.22), transparent 70%)" }}
        />
        <div className="relative z-10 max-w-md py-6">
          <h1 className="text-[32px] font-extrabold leading-[1.08] tracking-tight text-white">
            LOCAL PLUMBERS
            <br />
            YOU CAN TRUST
          </h1>
          <p className="mt-4 text-[13px] leading-relaxed text-white/60">
            Fast, reliable and professional plumbing services across Brisbane.
          </p>
          <div className="mt-6 flex items-center gap-5">
            <span className="rounded-md bg-[#2f6fed] px-5 py-2.5 text-[12.5px] font-semibold text-white">
              Get a Free Quote
            </span>
            <span className="flex items-center gap-2 text-[13px] font-semibold text-white">
              <PhoneIcon className="h-3.5 w-3.5 text-[#2f6fed]" />
              0400 123 456
            </span>
          </div>
        </div>
        <div className="relative z-10 ml-auto hidden h-full w-[620px] items-center justify-center self-stretch lg:flex">
          <div className="relative h-[78%] w-full overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/examples/local-tradie/hero.jpg"
              alt="Tradesperson at work with tools"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="flex flex-none items-center justify-around gap-4 border-t border-black/5 bg-[#f4f6f9] px-10 py-5">
        {BADGES.map((b) => (
          <div key={b.label} className="flex items-center gap-2.5">
            <span className="text-[#2f6fed]">
              <b.Icon className="h-4 w-4" />
            </span>
            <span className="max-w-[90px] text-[10.5px] font-medium leading-tight text-[#0b1220]/80">
              {b.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex-none bg-white px-10 py-6">
        <div className="mb-4 text-center text-[10px] font-bold tracking-[0.2em] text-[#0b1220]/50">
          OUR SERVICES
        </div>
        <div className="grid grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="text-center">
              <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf1ff] text-[#2f6fed]">
                <s.Icon className="h-4 w-4" />
              </span>
              <div className="text-[12px] font-semibold text-[#0b1220]">{s.title}</div>
              <div className="mt-1 text-[10px] leading-snug text-[#0b1220]/50">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-none items-center justify-between bg-[#2f6fed] px-10 py-4">
        <span className="text-[14px] font-bold text-white">Need a Plumber Today?</span>
        <span className="rounded-md bg-white px-4 py-2 text-[12px] font-semibold text-[#0b1220]">
          Get a Free Quote
        </span>
      </div>
    </div>
  );
}
