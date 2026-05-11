import { useState } from "react";
import QuoteForm from "./components/QuoteForm";

const testimonials = [
  {
    name: "Jason S.",
    timeAgo: "4 months ago",
    text: "We had them install cabinets for our laundry room and they came out great. Honest, hard working, and excellent customer service. Does the job right. Would highly recommend for this and other projects!",
  },
  {
    name: "Madison N.",
    timeAgo: "8 months ago",
    text: "They added this accent wall in my guest bathroom and did an outstanding job! I will be using them again to redo the baseboards throughout my house!",
  },
  {
    name: "Cody H.",
    timeAgo: "1 year ago",
    text: "They came out and installed baseboards in my home recently and did an amazing job. The workmanship is the best I've seen and they were very courteous and professional through the whole process.",
  },
];

const serviceAreas = [
  "San Tan Valley",
  "Queen Creek",
  "Gilbert",
  "Mesa",
  "Chandler",
  "Tempe",
  "Scottsdale",
  "Apache Junction",
  "Gold Canyon",
  "Casa Grande",
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TrailsideLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="top" className="bg-white text-zinc-900 scroll-smooth font-sans">

      {/* STICKY MOBILE CALL BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href="tel:4802553655"
          className="flex items-center justify-center gap-2 bg-brand-600 py-3.5 text-[15px] font-bold text-white shadow-[0_-2px_12px_rgba(0,0,0,0.15)] active:bg-brand-700"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
          </svg>
          (480) 255-3655 — Tap to Call
        </a>
      </div>

      {/* HEADER WRAPPER */}
      <div className="relative z-50">
        {/* Dark strip — mobile gets enough height for logo badge spill */}
        <div className="h-8 bg-zinc-900 md:h-10" />

        {/* NAVBAR */}
        <header className="border-b border-zinc-300/80 bg-[#FAF9F7] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative min-h-[52px] md:min-h-[68px] overflow-visible">
              {/* Mobile layout — logo centered on navbar midpoint, spills into dark strip above and hero below */}
              <div className="relative flex min-h-[52px] items-center justify-center md:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-800 shadow-sm"
                  aria-label="Open menu"
                >
                  <span className="text-xl leading-none">☰</span>
                </button>

                <a href="#top" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block">
                  <img
                    src="/logo.png"
                    alt="Trailside Trim & Carpentry logo"
                    className="h-[90px] w-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.28)]"
                  />
                </a>
              </div>

              {/* Desktop layout — sets the row height, nav links centered vertically */}
              <div className="hidden min-h-[68px] items-center justify-between md:flex">
                <nav className="flex items-center gap-7 text-[15px] font-medium tracking-[0.01em] text-zinc-600 lg:gap-8">
                  <a href="#top" className="transition hover:text-zinc-900">Home</a>
                  <a href="#services" className="transition hover:text-zinc-900">Services</a>
                  <a href="#gallery" className="transition hover:text-zinc-900">Gallery</a>
                </nav>
                <div className="md:w-[230px] lg:w-[260px]" />
              </div>

              {/* Center floating logo — centered on navbar, oversized to spill above and below */}
              <a
                href="#top"
                className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block"
              >
                <img
                  src="/logo.png"
                  alt="Trailside Trim & Carpentry logo"
                  className="h-[120px] w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.28)] lg:h-[130px]"
                />
              </a>

              {/* Right nav + CTA - desktop only */}
              <div className="absolute inset-y-0 right-0 hidden items-center justify-end gap-5 md:flex lg:gap-6">
                <nav className="flex items-center gap-7 text-[15px] font-medium tracking-[0.01em] text-zinc-600 lg:gap-8">
                  <a href="#about" className="transition hover:text-zinc-900">About</a>
                  <a href="#request-quote" className="transition hover:text-zinc-900">Request a Quote</a>
                </nav>
                <a
                  href="tel:4802553655"
                  className="rounded-lg bg-brand-600 px-4 py-2 text-[14px] font-semibold tracking-[0.01em] text-white shadow-sm transition hover:bg-brand-700"
                >
                  (480) 255-3655
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="border-b border-zinc-200 bg-white px-4 py-4 shadow-sm md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-3 text-[16px] font-medium text-zinc-700">
              <a onClick={() => setMobileMenuOpen(false)} href="#top" className="rounded-md px-3 py-2 hover:bg-zinc-100">Home</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#services" className="rounded-md px-3 py-2 hover:bg-zinc-100">Services</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#gallery" className="rounded-md px-3 py-2 hover:bg-zinc-100">Gallery</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#about" className="rounded-md px-3 py-2 hover:bg-zinc-100">About</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#request-quote" className="rounded-md px-3 py-2 hover:bg-zinc-100">Request a Quote</a>
            </nav>
          </div>
        )}
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f3f3f1]">
        <div className="relative h-[520px] w-full md:h-[620px]">
          <img
            src="/hero.jpg"
            alt="Interior trim carpentry"
            className="absolute inset-0 h-full w-full object-cover object-[center_65%] md:object-[center_75%] md:scale-105"
          />
          {/* Base dark layer across the whole image */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Stronger directional gradient from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
            <div className="max-w-lg text-white">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                The Finish Work
                <br />
                Your House Has
                <br />
                Been Missing
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/95 sm:text-lg">
                Professional cabinets, baseboards, doors, and finish trim serving
                San Tan Valley and the East Valley.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#request-quote"
                  className="rounded-md bg-brand-600 px-6 py-3 text-center font-semibold text-white shadow-md transition hover:bg-brand-700"
                >
                  Request a Quote
                </a>
                <a
                  href="tel:4802553655"
                  className="hidden rounded-md border border-white/60 px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-gray-900 sm:block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-zinc-200 bg-white py-4">
        <div className="mx-auto max-w-5xl px-6">
          {/* Mobile: 2x2 compact grid, short labels that never wrap */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-3 md:hidden">
            {[
              {
                label: "Licensed & Insured",
                path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                label: "5-Star on Google",
                path: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
              {
                label: "East Valley Local",
                path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                label: "Free Estimates",
                path: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <svg className="h-4 w-4 flex-shrink-0 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.path} />
                </svg>
                <span className="text-xs font-medium leading-tight text-zinc-700">{item.label}</span>
              </div>
            ))}
          </div>
          {/* Desktop: single row of 4 with full labels */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-4">
            {[
              {
                label: "Licensed & Insured",
                path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                label: "5-Star Rated on Google",
                path: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
              },
              {
                label: "East Valley Local",
                path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                label: "Free Estimates",
                path: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.path} />
                </svg>
                <span className="text-sm font-medium text-zinc-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f3f3f1] py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Finish Carpentry Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Detail-focused trim work for homeowners and builders who want clean lines,
            tight joints, and a finished look that feels right.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mx-auto mb-4 h-1 w-10 bg-brand-600" />
              <h3 className="mb-4 text-lg font-semibold">Baseboards & Trim</h3>
              <ul className="space-y-2 text-left text-sm text-gray-600">
                <li>• Clean, tight miter joints</li>
                <li>• Level and consistent reveals</li>
                <li>• Seamless transitions room to room</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mx-auto mb-4 h-1 w-10 bg-brand-600" />
              <h3 className="mb-4 text-lg font-semibold">Doors & Interior Trim</h3>
              <ul className="space-y-2 text-left text-sm text-gray-600">
                <li>• Interior door installation</li>
                <li>• Casing and jamb adjustments</li>
                <li>• Precise, consistent fit and finish</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mx-auto mb-4 h-1 w-10 bg-brand-600" />
              <h3 className="mb-4 text-lg font-semibold">Cabinets & Finish Work</h3>
              <ul className="space-y-2 text-left text-sm text-gray-600">
                <li>• Cabinet install and alignment</li>
                <li>• Crown, toe kick, and fillers</li>
                <li>• Clean final detailing that ties it together</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-sm text-gray-500">
            Working with homeowners, builders, and contractors across the East Valley.
          </div>
        </div>
      </section>

      {/* BUILDER CALLOUT */}
      <section className="bg-zinc-900 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                For Builders & General Contractors
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Reliable finish carpentry you can count on.
              </h2>
              <p className="mt-3 max-w-xl text-zinc-400">
                Need a trim sub who shows up, works clean, and doesn't create callbacks?
                Trailside works with builders and GCs across the East Valley on new construction
                and remodel projects of all sizes.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-brand-600">✓</span> On-schedule and communicative
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-600">✓</span> Licensed, bonded, and insured
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-600">✓</span> Single point of contact — you deal with Jake directly
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <a
                href="tel:4802553655"
                className="inline-block rounded-lg bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-700 whitespace-nowrap"
              >
                Let's Talk — (480) 255-3655
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Gallery of Our Work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A look at the clean, detailed finish work we bring to every project.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-[1.35fr_0.95fr]">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/gallery1.jpeg"
                alt="Bathroom vanity and finish carpentry"
                className="h-[420px] w-full object-cover transition duration-300 hover:scale-[1.02] md:h-[520px]"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/gallery2.jpeg"
                  alt="Custom panel trim detail"
                  className="h-[200px] w-full rounded-xl object-cover shadow-sm transition duration-300 hover:scale-[1.02] md:h-[250px]"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src="/gallery3.jpeg"
                  alt="Baseboard detail and finish trim"
                  className="h-[200px] w-full rounded-xl object-cover shadow-sm transition duration-300 hover:scale-[1.02] md:h-[250px]"
                />
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Clean lines. Tight joints. Detail-driven finish work that elevates the entire space.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-[#f3f3f1] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              What Clients Are Saying
            </p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">5.0 on Google</h2>
            <div className="mt-3 flex items-center justify-center gap-2">
              <StarRating />
              <span className="text-sm text-zinc-500">3 reviews</span>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
                <StarRating />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-700">"{t.text}"</p>
                <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                  <span className="text-sm font-semibold text-zinc-900">{t.name}</span>
                  <span className="text-xs text-zinc-400">{t.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/search?q=Trailside+Trim+%26+Carpentry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline"
            >
              See our reviews on Google
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
            {/* Photo placeholder — replace with <img> when ready */}
            <div className="flex-shrink-0">
              <div className="flex h-56 w-56 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-300 bg-zinc-50 text-zinc-400">
                <svg className="mb-2 h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium">Your photo here</span>
              </div>
              {/* When ready, replace the div above with:
              <img
                src="/jake.jpg"
                alt="Jake King — Owner, Trailside Trim & Carpentry"
                className="h-56 w-56 rounded-2xl object-cover object-top shadow-sm"
              /> */}
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">About</p>
              <h2 className="mt-2 text-3xl font-bold">Jake King</h2>
              <p className="mt-1 text-sm font-medium text-zinc-500">Owner, Trailside Trim & Carpentry</p>
              <p className="mt-5 leading-relaxed text-zinc-600">
                I started Trailside because I believe finish carpentry should be done with care —
                clean joints, level lines, and work you're proud to show off. Based in San Tan Valley,
                I work directly with homeowners and builders across the East Valley who want the job
                done right the first time.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Licensed, bonded, and insured. Every project gets my personal attention from start to finish.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#request-quote"
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
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <QuoteForm />

      {/* AREAS SERVED */}
      <section id="areas-served" className="border-t border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                Service Area
              </p>
              <h2 className="mt-2 text-2xl font-bold">Areas We Serve</h2>
              <p className="mt-2 text-sm text-zinc-500 max-w-sm">
                Finish carpentry across the greater East Valley and surrounding communities.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
              {serviceAreas.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium text-zinc-700"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-8 text-xs text-zinc-400">
            Not sure if we cover your area? Call or text Jake at{" "}
            <a href="tel:4802553655" className="text-brand-600 hover:underline font-medium">
              (480) 255-3655
            </a>{" "}
            — we're happy to discuss.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-zinc-50 py-10 pb-24 text-center text-sm text-zinc-500 md:pb-10">
        <div>
          San Tan Valley, AZ |{" "}
          <a href="tel:4802553655" className="hover:text-zinc-800">(480) 255-3655</a>{" "}
          |{" "}
          <a href="mailto:trailsidetrim@gmail.com" className="hover:text-zinc-800">trailsidetrim@gmail.com</a>
        </div>
        <div className="mt-3 text-xs text-zinc-400">
          Serving San Tan Valley, Queen Creek, Gilbert, Mesa, Chandler, Tempe, Scottsdale,
          Apache Junction, Gold Canyon & Casa Grande, AZ
        </div>
        <div className="mt-4">
          <a href="#request-quote" className="font-semibold text-brand-600 hover:underline">
            Request a Quote
          </a>
        </div>
      </footer>
    </div>
  );
}
