interface LogoProps {
  className?: string;
  markOnly?: boolean;
  subtitle?: boolean;
}

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mvd-grad" x1="4" y1="10" x2="44" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4fa3ff" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#e341d8" />
        </linearGradient>
      </defs>
      <path
        d="M6 38V12l12 12L30 12v14"
        stroke="url(#mvd-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="34" y="8" width="4.2" height="4.2" rx="0.8" fill="#8b5cf6" opacity="0.9" />
      <rect x="40" y="14" width="3.2" height="3.2" rx="0.7" fill="#c084fc" opacity="0.75" />
      <rect x="44.4" y="19.4" width="2.2" height="2.2" rx="0.5" fill="#e341d8" opacity="0.55" />
    </svg>
  );
}

export default function Logo({ className = "", markOnly = false, subtitle = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-7 w-7 sm:h-8 sm:w-8" />
      {!markOnly && (
        <div className="flex flex-col leading-none">
          <span className="flex items-baseline gap-1.5">
            <span className="text-[15px] sm:text-base font-semibold tracking-tight text-white">
              Murvado
            </span>
            <span className="text-[15px] sm:text-base font-semibold tracking-tight text-electric-400">
              Digital
            </span>
          </span>
          {subtitle && (
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-mist-400">
              Web Agency
            </span>
          )}
        </div>
      )}
    </div>
  );
}
