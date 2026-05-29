// src/pages/DoneRightGuarantee.tsx

const covered = [
  "Improper or faulty installation",
  "Trim or molding that loosens because fastening didn't hold",
  "Finish and detail issues caused by our workmanship",
  "Alignment or fit problems attributable to how something was installed",
  "Hardware that wasn't installed correctly",
];

const notCovered = [
  "Normal wear and tear over time",
  "Natural wood movement, expansion, and contraction",
  "Movement from Arizona's dry climate and seasonal temperature swings",
  "Structural shifting, settling, or stucco cracking",
  "Moisture, water, or plumbing-related damage",
  "Impact, abuse, or accidental damage",
  "Improper maintenance or changes made by others",
  "Pre-existing conditions or work performed by others",
];

const steps = [
  {
    title: "Reach out",
    body: "Call, text, or email and tell us what's going on. Photos help if you have them.",
  },
  {
    title: "We review",
    body: "We'll talk through the concern and take a look at anything you send over.",
  },
  {
    title: "We inspect if needed",
    body: "If it helps to see it in person, we'll schedule a time that works for you.",
  },
  {
    title: "We make it right",
    body: "If it's workmanship-related and within our scope, we'll schedule corrective work.",
  },
];

export default function DoneRightGuarantee() {
  return (
    <div className="bg-white text-zinc-900 font-sans">

      {/* MINIMAL HEADER */}
      <header className="border-b border-zinc-200 bg-[#FAF9F7]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="/" className="block">
            <img
              src="/logo.png"
              alt="Trailside Trim & Carpentry logo"
              className="h-12 w-auto object-contain md:h-14"
            />
          </a>
          <a
            href="/#request-quote"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Request a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-zinc-900 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-brand-600/15">
            <svg className="h-6 w-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            The Done Right Guarantee
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Built on Craftsmanship.
            <br className="hidden sm:block" /> Backed by Accountability.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
            We take pride in finish work that's done properly the first time — and we stand behind it.
            Here's what that means, in plain terms.
          </p>
        </div>
      </section>

      {/* WHAT IT MEANS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">What Our Guarantee Means</h2>
          <p className="mt-5 leading-relaxed text-zinc-600">
            When Trailside finishes a project, our work should look right, fit right, and hold up the
            way quality finish carpentry should. If something within our workmanship wasn't completed
            properly, we'll make reasonable efforts to correct it.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-600">
            No runaround and no disappearing act — just a straightforward conversation and a fair
            resolution. We'd rather earn a long-term reputation across the East Valley than win any
            single job.
          </p>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-[#f3f3f1] py-16">
        <div className="mx-auto max-w-5xl px-6 space-y-4">

          {/* Covered — prominent, brand header */}
          <div className="rounded-2xl bg-white shadow-md overflow-hidden">
            {/* Brand accent header band */}
            <div className="bg-brand-600 px-7 py-5">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h2 className="text-xl font-bold text-white">What's Covered</h2>
              </div>
              <p className="mt-1.5 text-sm text-white/80 pl-9">
                Our guarantee applies to the quality of our workmanship, including:
              </p>
            </div>

            {/* List body */}
            <div className="px-7 py-6">
              <ul className="space-y-3.5">
                {covered.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-zinc-800">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-zinc-100 pt-4 text-xs leading-relaxed text-zinc-500">
                Materials and products themselves (cabinets, hardware, fixtures, etc.) remain covered
                by their manufacturer's warranty, separate from our workmanship.
              </p>
            </div>
          </div>

          {/* Not Covered — compact, fine-print treatment */}
          <div className="rounded-xl border border-zinc-200 bg-zinc-50/60 px-5 py-5">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Exclusions</p>
            <h2 className="text-sm font-semibold text-zinc-500">What's Not Covered</h2>
            <p className="mt-1.5 text-xs text-zinc-400">
              So expectations stay clear, our guarantee does not cover issues outside our workmanship, including:
            </p>
            <ul className="mt-3 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
              {notCovered.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-zinc-400">
                  <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-zinc-200 pt-3 text-xs leading-relaxed text-zinc-400">
              Some of these are simply part of how homes behave over time — especially in the desert —
              and fall outside what any finish carpenter can control.
            </p>
          </div>

        </div>
      </section>

      {/* HOW WE HANDLE CONCERNS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">How We Handle Concerns</h2>
          <p className="mt-3 text-zinc-600">
            If you think something isn't right, reaching us is simple:
          </p>
          <ol className="mt-8 space-y-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-zinc-900">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 rounded-lg bg-zinc-50 p-4 text-xs leading-relaxed text-zinc-500">
            Resolutions are handled in good faith and at our discretion, based on what the review or
            inspection shows.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-zinc-900 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Why This Matters to Us
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            We take ownership of our work.
          </h2>
          <p className="mt-5 leading-relaxed text-zinc-400">
            Trailside is a local, owner-operated business. Jake is your single point of contact from the
            first conversation to the final detail — and after it. The contractors worth hiring are the
            ones who communicate honestly, set clear expectations, and stand behind what they build.
            That's the standard we hold ourselves to on every project.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f3f3f1] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Questions about our workmanship guarantee?
          </h2>
          <p className="mt-3 text-zinc-600">
            Reach out anytime — we're happy to talk it through before you ever commit to a project.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/#request-quote"
              className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Request a Quote
            </a>
            <a
              href="tel:4802553655"
              className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
            >
              (480) 255-3655
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-zinc-50 py-10 text-center text-sm text-zinc-500">
        <div>
          San Tan Valley, AZ |{" "}
          <a href="tel:4802553655" className="hover:text-zinc-800">(480) 255-3655</a>{" "}
          |{" "}
          <a href="mailto:trailsidetrim@gmail.com" className="hover:text-zinc-800">trailsidetrim@gmail.com</a>
        </div>
        <div className="mt-4">
          <a href="/" className="font-semibold text-brand-600 hover:underline">
            ← Back to Trailside Trim &amp; Carpentry
          </a>
        </div>
      </footer>
    </div>
  );
}
