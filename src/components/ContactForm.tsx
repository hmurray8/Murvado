import { useState, type FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/hello@murvado.com";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "focus-ring w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-mist-400/70 transition-colors duration-200 focus-visible:border-electric-400/50";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-grad-brand text-white">
          ✓
        </div>
        <p className="mt-4 text-lg font-medium text-white">
          Thanks — your message is on its way.
        </p>
        <p className="mt-1.5 text-sm text-mist-400">
          We'll get back to you shortly at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-xl text-left"
      noValidate
    >
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="New project enquiry — Murvado Digital site" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-mist-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-mist-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-mist-300">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What are you building, and what does success look like?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-rose-400">
          Something went wrong sending your message. Please try again, or
          email us directly at{" "}
          <a href="mailto:hello@murvado.com" className="underline">
            hello@murvado.com
          </a>
          .
        </p>
      )}

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="focus-ring group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
        >
          <span className="relative z-10">
            {status === "submitting" ? "Sending…" : "Start a Project"}
          </span>
          {status !== "submitting" && (
            <span
              aria-hidden="true"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
