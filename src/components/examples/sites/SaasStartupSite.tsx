import { BoltIcon, HeadsetIcon, LayersIcon, LockIcon, TrendUpIcon } from "../icons";

const LOGOS = ["ideaseed", "urbanist", "northwest", "cloudbase", "foundry"];

const FEATURES = [
  { Icon: BoltIcon, title: "Easy to use", desc: "Get set up in minutes" },
  { Icon: LayersIcon, title: "All in one place", desc: "Everything you need" },
  { Icon: LockIcon, title: "Secure & reliable", desc: "Your data is safe" },
  { Icon: HeadsetIcon, title: "Support that cares", desc: "We're here to help" },
];

const BARS = [40, 65, 50, 80, 60, 90, 72];

function DashboardMock() {
  return (
    <div className="flex h-full w-full flex-col rounded-xl border border-[#e7e2f5] bg-white p-4 shadow-[0_20px_50px_-20px_rgba(109,40,217,0.25)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-[#1c1a24]">Dashboard</span>
        <span className="flex items-center gap-1 rounded-full bg-[#ecfdf5] px-2 py-0.5 text-[9px] font-semibold text-[#059669]">
          <TrendUpIcon className="h-2.5 w-2.5" />
          +12.4%
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ["$24,580", "Revenue"],
          ["$12,420", "Expenses"],
          ["$8,160", "Profit"],
        ].map(([val, label]) => (
          <div key={label} className="rounded-lg bg-[#f6f4fc] p-2">
            <div className="text-[11px] font-bold text-[#1c1a24]">{val}</div>
            <div className="text-[8px] text-[#1c1a24]/45">{label}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-1 items-end gap-1.5 rounded-lg bg-[#f6f4fc] p-3">
        {BARS.map((h, i) => (
          <span
            key={i}
            className="w-full rounded-t-sm bg-gradient-to-t from-[#8b5cf6] to-[#a78bfa]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-lg bg-[#f6f4fc] p-3">
        <div
          className="h-10 w-10 shrink-0 rounded-full"
          style={{
            background:
              "conic-gradient(#7c3aed 0% 45%, #a78bfa 45% 75%, #ddd6fe 75% 100%)",
          }}
        />
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 w-4/5 rounded-full bg-[#ddd6fe]" />
          <div className="h-1.5 w-3/5 rounded-full bg-[#ddd6fe]" />
          <div className="h-1.5 w-2/3 rounded-full bg-[#ddd6fe]" />
        </div>
      </div>
    </div>
  );
}

export default function SaasStartupSite() {
  return (
    <div className="flex h-full w-full flex-col bg-white font-sans text-[#1c1a24]">
      <header className="flex flex-none items-center justify-between border-b border-black/[0.05] px-10 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#6d28d9] text-white">
            <BoltIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-[14px] font-bold">Flowly</span>
        </div>
        <nav className="flex items-center gap-7 text-[12px] text-[#1c1a24]/60">
          <span>Product</span>
          <span>Pricing</span>
          <span>Resources</span>
          <span>About</span>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-[12px] font-medium text-[#1c1a24]/60">Login</span>
          <span className="rounded-md bg-[#6d28d9] px-4 py-2 text-[12px] font-semibold text-white">
            Start Free Trial
          </span>
        </div>
      </header>

      <div className="grid flex-1 grid-cols-2 gap-10 px-10 py-10">
        <div className="flex h-full flex-col justify-center">
          <h1 className="text-[42px] font-bold leading-[1.08] tracking-tight">
            The simple way to manage your business.
          </h1>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[#1c1a24]/55">
            Flowly helps small businesses save time, stay organised and get more done.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="rounded-md bg-[#6d28d9] px-6 py-3 text-[13px] font-semibold text-white">
              Start Free Trial
            </span>
            <span className="rounded-md border border-black/10 px-6 py-3 text-[13px] font-semibold text-[#1c1a24]">
              View Demo
            </span>
          </div>
        </div>
        <div className="h-full w-full">
          <DashboardMock />
        </div>
      </div>

      <div className="flex-none border-y border-black/[0.05] bg-[#faf9fc] px-10 py-4">
        <div className="mb-3 text-center text-[9px] font-semibold tracking-[0.2em] text-[#1c1a24]/35">
          TRUSTED BY GROWING BUSINESSES
        </div>
        <div className="flex items-center justify-center gap-9">
          {LOGOS.map((l) => (
            <span key={l} className="text-[12px] font-semibold text-[#1c1a24]/30">
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-none px-10 py-6">
        <div className="grid grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f3effc] text-[#6d28d9]">
                <f.Icon className="h-3.5 w-3.5" />
              </span>
              <div>
                <div className="text-[12px] font-semibold">{f.title}</div>
                <div className="mt-0.5 text-[10px] leading-snug text-[#1c1a24]/45">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
