import Reveal from "./Reveal";

export default function BigStatement() {
  return (
    <section className="relative overflow-hidden py-36 sm:py-48">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 animate-gradient-x rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            "linear-gradient(120deg, #3b82f6, #a855f7, #e341d8, #3b82f6)",
          backgroundSize: "300% 300%",
        }}
      />
      <div className="container-page relative">
        <Reveal y={30} className="mx-auto max-w-5xl text-center">
          <p className="text-balance text-4xl font-semibold leading-[1.08] tracking-tightest text-white sm:text-6xl lg:text-7xl">
            Your website should work
            <br className="hidden sm:block" /> as hard as{" "}
            <span className="text-gradient">you do.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
