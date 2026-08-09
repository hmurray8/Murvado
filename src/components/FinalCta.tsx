import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-page">
        <Reveal y={26}>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-ink-900 px-6 py-20 text-center sm:px-12 sm:py-28">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,0.22), transparent 70%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />

            <div className="relative">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Ready to build something better?
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-balance text-lg text-mist-300">
                Tell us what you're working on and we'll show you what's
                possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
