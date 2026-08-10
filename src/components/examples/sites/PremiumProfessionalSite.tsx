import { ArrowRightIcon, BriefcaseIcon, FileTextIcon, HomeIcon, ScaleIcon } from "../icons";

const LOGOS = ["ASPIRE GROUP", "NORTHPOINT", "ELEVATE PROPERTY", "CLEARFIELD"];

const PRACTICE_AREAS = [
  { Icon: BriefcaseIcon, title: "Commercial Law", desc: "Contracts, agreements and business advice." },
  { Icon: HomeIcon, title: "Property Law", desc: "Buying, selling and developing property." },
  { Icon: ScaleIcon, title: "Litigation", desc: "Dispute resolution and court representation." },
  { Icon: FileTextIcon, title: "Wills & Estates", desc: "Protecting your assets and your family." },
];

export default function PremiumProfessionalSite() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f7f5f0] font-sans text-[#1c1b18]">
      <header className="flex flex-none items-center justify-between border-b border-black/[0.06] bg-[#f7f5f0] px-10 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center border border-[#a8752c] text-[11px] font-bold text-[#a8752c]">
            H
          </span>
          <span className="text-[13px] font-semibold tracking-[0.12em]">HARRISON LEGAL</span>
        </div>
        <nav className="flex items-center gap-7 text-[12.5px] text-[#1c1b18]/70">
          <span className="text-[#1c1b18]">Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Our Team</span>
          <span>Insights</span>
        </nav>
        <span className="rounded-sm bg-[#1c1b18] px-4 py-2 text-[12px] font-semibold text-white">
          Contact Us
        </span>
      </header>

      <div className="grid flex-1 grid-cols-2 gap-8 px-10 py-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-[30px] font-medium leading-[1.15] tracking-tight">
            Strategic legal advice.
            <br />
            Real world solutions.
          </h1>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-[#1c1b18]/60">
            We provide practical legal solutions for businesses and individuals.
          </p>
          <span className="mt-6 w-fit rounded-sm bg-[#a8752c] px-5 py-2.5 text-[12px] font-semibold text-white">
            Speak to an Expert
          </span>
        </div>
        <div className="overflow-hidden rounded-sm">
          <img
            src="https://loremflickr.com/1000/600/skyscraper,glass?lock=301"
            alt="Modern glass office tower"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex-none border-y border-black/[0.06] bg-white/50 px-10 py-4">
        <div className="mb-3 text-center text-[9px] font-semibold tracking-[0.2em] text-[#1c1b18]/40">
          TRUSTED BY BUSINESSES ACROSS AUSTRALIA
        </div>
        <div className="flex items-center justify-center gap-10">
          {LOGOS.map((l) => (
            <span key={l} className="text-[11px] font-semibold tracking-wide text-[#1c1b18]/35">
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-8 px-10 py-8">
        <div className="overflow-hidden rounded-sm">
          <img
            src="https://loremflickr.com/900/600/businesswoman,office?lock=704"
            alt="Legal professional working at a laptop by natural light"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-[#a8752c]">ABOUT US</span>
          <h2 className="mt-2 text-[19px] font-medium leading-snug">
            We are a client-focused law firm with a difference.
          </h2>
          <p className="mt-3 max-w-sm text-[12px] leading-relaxed text-[#1c1b18]/55">
            Our team combines deep legal expertise with commercial insight to deliver the best
            outcomes for our clients.
          </p>
          <span className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-[#a8752c]">
            Learn more about us
            <ArrowRightIcon className="h-3 w-3" />
          </span>
        </div>
      </div>

      <div className="flex-none border-t border-black/[0.06] bg-[#f0ece3] px-10 py-6">
        <div className="grid grid-cols-4 gap-6">
          {PRACTICE_AREAS.map((p) => (
            <div key={p.title} className="flex items-start gap-2.5">
              <span className="mt-0.5 text-[#a8752c]">
                <p.Icon className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[12px] font-semibold">{p.title}</div>
                <div className="mt-1 text-[10px] leading-snug text-[#1c1b18]/50">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
