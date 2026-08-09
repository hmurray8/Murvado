interface LogoProps {
  className?: string;
  markOnly?: boolean;
  subtitle?: boolean;
}

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/small-logo.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
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
