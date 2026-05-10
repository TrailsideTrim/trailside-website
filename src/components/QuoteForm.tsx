// src/components/QuoteForm.tsx

import { useState } from "react";

const workTypes = [
  "Cabinets",
  "Trim",
  "Countertops",
  "Drywall Repair",
  "Multiple / Not Sure",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "c856f751-da45-46ed-b2d9-6e6484a89c1a");
    formData.append("subject", "New Trailside Website Quote Request");
    formData.append("from_name", "Trailside Website");
    formData.append("replyto", formData.get("email") as string || "");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (result.success) {
      setSubmitted(true);
      e.currentTarget.reset();
    } else {
      console.error("Form submission failed:", result);
      alert("Something went wrong. Please call or text us directly.");
    }
  }

  return (
    <section id="request-quote" className="scroll-mt-28">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-2xl bg-white p-6 md:p-8 border border-zinc-200/70">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Request a Quote
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Tell us about your project
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Share a few details and Trailside Trim & Carpentry will follow up to discuss the next step.
            </p>
            <p className="mt-3 text-xs text-zinc-500">
              Most requests are reviewed within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-green-800">
              Thank you — your request has been received. We'll follow up shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  className="rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600 transition"
                />

                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Phone"
                  className="rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600 transition"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600 transition"
                />

                <input
                  name="cityZip"
                  required
                  placeholder="City / ZIP"
                  className="rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600 transition"
                />
              </div>

              <select
                name="workType"
                required
                className="rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600 transition"
                defaultValue=""
              >
                <option value="" disabled>
                  Type of work
                </option>
                {workTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <textarea
                name="description"
                required
                rows={5}
                placeholder="Briefly describe the project..."
                className="rounded-lg border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/30 focus:border-brand-600 transition"
              />

              <div className="rounded-lg border border-zinc-200 p-4 bg-zinc-50/50">
                <p className="mb-3 text-sm font-medium">
                  Is this an insurance claim?
                </p>

                <div className="flex gap-6 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="insuranceClaim" value="Yes" required />
                    Yes
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="radio" name="insuranceClaim" value="No" required />
                    No
                  </label>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-4 text-sm text-zinc-700">
                <p className="font-medium text-zinc-900">Project photos</p>
                <p className="mt-1 text-xs text-zinc-500">
                  After submitting, you can email project photos to{" "}
                  <a
                    href="mailto:trailsidetrim@gmail.com"
                    className="font-semibold text-brand-600 hover:underline"
                  >
                    TrailsideTrim@gmail.com
                  </a>
                  , or text them to{" "}
                  <a
                    href="sms:4802553655"
                    className="font-semibold text-brand-600 hover:underline"
                  >
                    (480) 255-3655
                  </a>
                  .
                </p>
              </div>

              <button
                type="submit"
                className="mt-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700 transition"
              >
                Request a Quote
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
