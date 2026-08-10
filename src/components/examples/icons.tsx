interface IconProps {
  className?: string;
}

const base = "h-full w-full";

export function DropletIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3c3.5 4 6 7.2 6 10.2a6 6 0 1 1-12 0C6 10.2 8.5 7 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TagIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.5 4h-5A2.5 2.5 0 0 0 4 6.5v5c0 .5.2 1 .55 1.35l8.1 8.1c.6.6 1.5.6 2.1 0l6.1-6.1c.6-.6.6-1.5 0-2.1l-8.1-8.1A2 2 0 0 0 11.5 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="8.5" r="1.25" fill="currentColor" />
    </svg>
  );
}

export function ShieldIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 19 6v5.5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className = base, filled = false }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} className={className} aria-hidden="true">
      <path
        d="M12 3.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L12 16.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WrenchIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6 2.4 2.4 6-6a4 4 0 0 0 5-5.4l-2.7 2.7-2-2 2.7-2.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WaveIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 9c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 1.5 2 3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 1.5 2 3 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function HomeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 11.5 12 4l8 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10v9h12v-9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 3.5h3l1.4 4.3-2 1.6a11 11 0 0 0 5.2 5.2l1.6-2 4.3 1.4v3c0 1-.9 1.8-1.9 1.6C10.5 17.9 6.1 13.5 4.4 6.4A1.7 1.7 0 0 1 6 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BriefcaseIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="8" width="17" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 8V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 13h17" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ScaleIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3v16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 6 4 8l3.3 6.2a4.2 4.2 0 0 0 5.4 0L12 8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 6l8 2-3.3 6.2a4.2 4.2 0 0 1-5.4 0L12 8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export function FileTextIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.5 12h5M9.5 15.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LeafIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 4c.6 7-2.6 13-10 15.5C6 20.4 4 18 4.5 14 5.6 7 12 4 20 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M19 5 8.5 15.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 19c.6-3 2.7-4.8 5.5-4.8s4.9 1.8 5.5 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.5 6a3 3 0 0 1 0 5.8M18 19c-.4-2.2-1.4-3.8-3-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MapPinIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function HammerIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13.5 6.5 17 3l4 4-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M14.8 8.7 4.5 19a1.6 1.6 0 0 0 2.5 2L17 10.7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M11.5 5.7l2.8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function LayersIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3.5 4 8l8 4.5L20 8 12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 12.5 12 17l8-4.5M4 16.5 12 21l8-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function LockIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="15.3" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function HeadsetIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17" y="13" width="4" height="6" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 19v1a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function TrendUpIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3.5 16 10 9.5l4 4 6.5-7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 5.5h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 12.5 9 17.5 20 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusSquareIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SproutIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 12c0-3.5-2.5-5.5-7-5.5C5.3 10.5 8 12 12 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 9.5c0-3 2.2-5 6-5 .3 3.5-1.8 5.5-6 5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
