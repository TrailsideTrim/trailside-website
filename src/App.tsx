import { useState } from "react";
import QuoteForm from "./components/QuoteForm";

export default function TrailsideLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="top" className="bg-white text-zinc-900 scroll-smooth">
      {/* HEADER WRAPPER */}
      <div className="relative z-50">
        <div className="relative h-5 overflow-hidden border-b border-black/10 bg-neutral-900 md:h-6">
          <div className="absolute inset-0 bg-[url('/textures/dark-wood.jpg')] bg-cover bg-center opacity-22" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/35" />
        </div>

        {/* NAVBAR */}
        <header className="border-b border-zinc-200/60 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative min-h-[58px] md:min-h-[96px] overflow-visible">
              {/* Mobile layout */}
              <div className="relative flex min-h-[58px] items-center justify-center md:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-800 shadow-sm"
                  aria-label="Open menu"
                >
                  <span className="text-2xl leading-none">☰</span>
                </button>

                <a href="#top" className="block">
                  <img
                    src="/logo.png"
                    alt="Trailside Trim & Carpentry logo"
                    className="relative top-0 h-[104px] w-auto object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
                  />
                </a>
              </div>

              {/* Desktop layout */}
              <div className="hidden min-h-[96px] items-center justify-between md:flex">
                <nav className="flex items-center gap-7 text-[16px] font-medium tracking-[0.01em] text-zinc-700 lg:gap-8">
                  <a href="#top" className="transition hover:text-black">Home</a>
                  <a href="#services" className="transition hover:text-black">Services</a>
                  <a href="#gallery" className="transition hover:text-black">Gallery</a>
                </nav>

                <div className="md:w-[230px] lg:w-[260px]" />
              </div>

              {/* Center floating logo - desktop only */}
              <a
                href="#top"
                className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-[15%] md:block"
              >
                <img
                  src="/logo.png"
                  alt="Trailside Trim & Carpentry logo"
                  className="h-[132px] w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)] lg:h-[150px]"
                />
              </a>

              {/* Right nav + CTA - desktop only */}
              <div className="absolute inset-y-0 right-0 hidden items-center justify-end gap-5 md:flex lg:gap-6">
                <nav className="flex items-center gap-7 text-[16px] font-medium tracking-[0.01em] text-zinc-700 lg:gap-8">
                  <a href="#about" className="transition hover:text-black">About</a>
                  <a href="#request-quote" className="transition hover:text-black">Request a Quote</a>
                </nav>

                <a
                  href="tel:4802553655"
                  className="rounded-lg bg-orange-600 px-5 py-2.5 text-[15px] font-semibold tracking-[0.01em] text-white shadow-sm transition hover:bg-orange-700"
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
              <a onClick={() => setMobileMenuOpen(false)} href="#top" className="rounded-md px-3 py-2 hover:bg-zinc-100">
                Home
              </a>
              <a onClick={() => setMobileMenuOpen(false)} href="#services" className="rounded-md px-3 py-2 hover:bg-zinc-100">
                Services
              </a>
              <a onClick={() => setMobileMenuOpen(false)} href="#gallery" className="rounded-md px-3 py-2 hover:bg-zinc-100">
                Gallery
              </a>
              <a onClick={() => setMobileMenuOpen(false)} href="#about" className="rounded-md px-3 py-2 hover:bg-zinc-100">
                About
              </a>
              <a onClick={() => setMobileMenuOpen(false)} href="#request-quote" className="rounded-md px-3 py-2 hover:bg-zinc-100">
                Request a Quote
              </a>
              <a
                onClick={() => setMobileMenuOpen(false)}
                href="tel:4802553655"
                className="mt-2 rounded-md bg-orange-600 px-4 py-3 text-center font-semibold text-white shadow-sm"
              >
                Call Now
              </a>
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

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent md:from-black/60 md:via-black/25 md:to-transparent" />

          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
            <div className="max-w-md text-white">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Trim & Finish
                <br />
                Carpentry Done
                <br />
                Right
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
                Professional cabinets, baseboards, doors, and finish trim serving
                San Tan Valley and the East Valley.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#request-quote"
                  className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600"
                >
                  Request a Quote
                </a>

                <a
                  href="tel:4802553655"
                  className="rounded-md border border-white/60 px-6 py-3 font-medium text-white transition hover:bg-white hover:text-gray-900"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-5 text-sm text-white/70">
                Licensed • Bonded • Insured
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f3f3f1] py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Finish Carpentry Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Detail-focused trim work for homeowners and builders who want clean lines,
            tight joints, and a finished look that feels right.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mx-auto mb-4 h-1 w-10 bg-orange-500" />
              <h3 className="mb-4 text-lg font-semibold">Baseboards & Trim</h3>
              <ul className="space-y-2 text-left text-sm text-gray-600">
                <li>• Clean, tight miter joints</li>
                <li>• Level and consistent reveals</li>
                <li>• Seamless transitions room to room</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mx-auto mb-4 h-1 w-10 bg-orange-500" />
              <h3 className="mb-4 text-lg font-semibold">Doors & Interior Trim</h3>
              <ul className="space-y-2 text-left text-sm text-gray-600">
                <li>• Interior door installation</li>
                <li>• Casing and jamb adjustments</li>
                <li>• Precise, consistent fit and finish</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md">
              <div className="mx-auto mb-4 h-1 w-10 bg-orange-500" />
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

      {/* ABOUT */}
      <section id="about" className="bg-zinc-100 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black">About Trailside</h2>
          <p className="mt-6 text-zinc-600">
            Trailside Trim & Carpentry focuses on clean, professional finish work with an emphasis on detail, communication, and reliability. Based in San Tan Valley, serving homeowners throughout the East Valley.
          </p>
        </div>
      </section>

      {/* QUOTE FORM */}
      <QuoteForm />

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-zinc-500">
        <div>
          San Tan Valley, AZ |{" "}
          <a href="tel:4802553655" className="hover:text-zinc-800">
            (480) 255-3655
          </a>{" "}
          |{" "}
          <a href="mailto:trailsidetrim@gmail.com" className="hover:text-zinc-800">
            trailsidetrim@gmail.com
          </a>
        </div>

        <div className="mt-4">
          <a
            href="#request-quote"
            className="font-semibold text-orange-600 hover:underline"
          >
            Request a Quote
          </a>
        </div>
      </footer>
    </div>
  );
}