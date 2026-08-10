import type { CSSProperties, ReactNode } from "react";

interface ScaledFrameProps {
  url: string;
  canvasWidth?: number;
  canvasHeight?: number;
  children: ReactNode;
}

export default function ScaledFrame({
  url,
  canvasWidth = 1280,
  canvasHeight = 900,
  children,
}: ScaledFrameProps) {
  const canvasStyle: CSSProperties = {
    width: canvasWidth,
    height: canvasHeight,
    "--canvas-w": `${canvasWidth}px`,
  } as CSSProperties;

  return (
    <div className="h-full w-full overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/50 sm:rounded-2xl">
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#151821] px-3.5 py-2.5 sm:px-4 sm:py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-full bg-white/[0.06] px-3 py-1 text-center font-mono text-[10px] text-white/40 sm:text-[11px]">
          {url}
        </div>
      </div>
      <div
        className="site-scale-frame relative w-full overflow-hidden"
        style={{ aspectRatio: `${canvasWidth} / ${canvasHeight}` }}
      >
        <div className="site-scale-canvas absolute left-0 top-0 origin-top-left" style={canvasStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}
