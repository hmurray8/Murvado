interface BrowserFrameProps {
  url: string;
  image: string;
  alt: string;
}

export default function BrowserFrame({ url, image, alt }: BrowserFrameProps) {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#151821] px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="ml-2 flex-1 truncate rounded-full bg-white/[0.06] px-3 py-1 text-center font-mono text-[10px] text-white/40">
          {url}
        </div>
      </div>
      <div className="aspect-[8/5] w-full overflow-hidden bg-ink-900">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
